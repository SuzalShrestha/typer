import { useCallback, useEffect, useState } from "react";
import useWords from "./useWords";
import useCountDownTimer from "./useCountDownTimer";
import useTyping from "./useTyping";
import { calculateErrors } from "../utils/helper";
export type Engine = "start" | "run" | "end";
const NumberOfWords = 10;
const TimeLimit = 30;
function useEngine() {
  const [state, setState] = useState<Engine>("start");
  const { words, updateWords } = useWords(NumberOfWords);
  const { timeLeft, startCountDown, stopCountDown } =
    useCountDownTimer(TimeLimit);
  const { userTyped, cursor, clearTyped, resetTotalTyped, totalTyped } =
    useTyping({ enabled: state !== "end" });
  const [errors, setErrors] = useState(0);
  const isStarting = state === "start" && cursor > 0;
  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prev) => prev + calculateErrors(userTyped, wordsReached));
  }, [cursor, userTyped, words]);
  const areWordsCompleted = cursor === words.length;
  //start as soon as the user types the first character
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountDown();
    }
  }, [isStarting, startCountDown, cursor]);
  //stop the timer when the words are completed
  useEffect(() => {
    if (!timeLeft) {
      console.log("time is up");
      setState("end");
      sumErrors();
    }
  }, [timeLeft, sumErrors]);
  //regenerate words when the words are completed
  useEffect(() => {
    if (areWordsCompleted) {
      console.log("words are completed");
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    userTyped,
    sumErrors,
    areWordsCompleted,
    updateWords,
    clearTyped,
  ]);
  //at restart button
  const restart = useCallback(() => {
    console.log("restarting");
    setState("start");
    stopCountDown();
    resetTotalTyped();
    setErrors(0);
    updateWords();
    clearTyped();
  }, [stopCountDown, resetTotalTyped, updateWords, clearTyped]);
  return { state, words, timeLeft, userTyped, errors, totalTyped, restart };
}
export default useEngine;
