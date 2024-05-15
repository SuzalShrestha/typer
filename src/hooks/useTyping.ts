import { useState, useCallback, useEffect, useRef } from "react";
const isCodeAllowed = (code: string) => {
  return (
    code === "Space" ||
    code === "Backspace" ||
    code.startsWith("Key") ||
    code.startsWith("Digit")
  );
};
function useTyping({
  enabled,
  expectedWords,
}: {
  enabled: boolean;
  expectedWords: string;
}) {
  const [userTyped, setUserTyped] = useState("");
  const [cursor, setCursor] = useState(0);
  const [totalError, setTotalError] = useState(0);
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
          // If the key is not the expected character
          if (expectedWords[cursor] !== key) {
            // If the key is the expected character and there are no errors
            if (totalError < 6) {
              setUserTyped((prev) => prev.concat(key));
              setCursor((prev) => prev + 1);
              totalTyped.current += 1;
              setTotalError(totalError + 1);
            }
          } //If the key is the expected character and there are 2 errors, reset the total error
          else {
            setUserTyped((prev) => prev.concat(key));
            setCursor((prev) => prev + 1);
            totalTyped.current += 1;
            setTotalError(0);
          }
          break;
      }
    },
    [enabled, expectedWords, cursor, totalError]
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
