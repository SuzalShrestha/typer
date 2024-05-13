import { useState } from "react";
import useWords from "./useWords";
import useCountDownTimer from "./useCountDownTimer";
type Engine = "start" | "run" | "end";
const NumberOfWords = 10;
const TimeLimit = 60;
function useEngine() {
  const [state, setState] = useState<Engine>("start");
  const { words, updateWords } = useWords(NumberOfWords);
  const { timeLeft, startCountDown, stopCountDown } =
    useCountDownTimer(TimeLimit);
  return { state, words, timeLeft };
}
export default useEngine;
