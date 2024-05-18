import { useRef, useCallback, useState, useEffect } from "react";
import useTimer from "./useTimer";
function useCountDownTimer() {
  const { timer: seconds } = useTimer();
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startCountDown = useCallback(() => {
    console.log("Starting countdown");
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);
  const stopCountDown = useCallback(() => {
    console.log("Stopping countdown");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimeLeft(seconds);
  }, [setTimeLeft, seconds]);
  useEffect(() => {
    setTimeLeft(seconds);
  }, [seconds]);
  //when count is 0 clear the interval
  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log("Countdown finished");
      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);
  return { timeLeft, startCountDown, stopCountDown };
}
export default useCountDownTimer;
