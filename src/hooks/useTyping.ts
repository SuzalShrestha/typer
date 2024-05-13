import { useState, useCallback, useEffect, useRef } from "react";
const isCodeAllowed = (code: string) => {
  return (
    code === "Space" ||
    code === "Backspace" ||
    code.startsWith("Key") ||
    code.startsWith("Digit")
  );
};
function useTyping({ enabled }: { enabled: boolean }) {
  const [userTyped, setUserTyped] = useState("");
  const [cursor, setCursor] = useState(0);
  const totalTyped = useRef(0);
  const clearTyped = useCallback(() => {
    setUserTyped("");
    setCursor(0);
  }, []);
  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0;
  }, []);
  const handleKeyDown = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isCodeAllowed(code)) return;
      switch (key) {
        case "Backspace":
          setUserTyped((prev) => prev.slice(0, -1));
          setCursor((prev) => prev - 1);
          totalTyped.current -= 1;
          break;
        default:
          setUserTyped((prev) => prev.concat(key));
          setCursor((prev) => prev + 1);
          totalTyped.current += 1;
          break;
      }
    },
    [enabled]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
  return {
    userTyped,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped: totalTyped.current,
  };
}
export default useTyping;
