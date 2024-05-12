import { useState } from "react";
import useWords from "./useWords";
type Engine = "start" | "run" | "end";
const NumberOfWords = 10;
function useEngine() {
  const [state, setState] = useState<Engine>("start");
  const { words, updateWords } = useWords(NumberOfWords);
  return { state, words };
}
export default useEngine;
