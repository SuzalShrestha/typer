import { useState } from "react";
import useWords from "./useWords";
import useCountDownTimer from "./useCountDownTimer";
import useTyping from "./useTyping";
type Engine = "start" | "run" | "end";
const NumberOfWords = 10;
const TimeLimit = 60;
function useEngine() {
  const [state, setState] = useState<Engine>("start");
  const { words, updateWords } = useWords(NumberOfWords);
  const { timeLeft, startCountDown, stopCountDown } =
    useCountDownTimer(TimeLimit);
  const { userTyped, cursor, clearTyped, resetTotalTyped, totalTyped } =
    useTyping({ enabled: state !== "end" });
  return { state, words, timeLeft, userTyped };
}
export default useEngine;
