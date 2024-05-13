import { useRef, useCallback, useState, useEffect } from "react";
function useCountDownTimer(seconds: number) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);
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
