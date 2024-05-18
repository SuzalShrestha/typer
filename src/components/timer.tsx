import useTimer from "../hooks/useTimer";
import { Button } from "../shadcn/ui/button";
function Timer({ timeleft, state }: { timeleft: number; state: string }) {
  const timer = useTimer();
  const isStart = state === "run" || state === "end";
  return (
    <div className="text-yellow-500">
      {!isStart && (
        <div className="flex gap-10 w-full justify-center my-10">
          <Button
            className="px-6"
            variant={"secondary"}
            onClick={() => timer.setTimer(30)}
          >
            30
          </Button>
          <Button
            className="px-6"
            variant={"secondary"}
            onClick={() => timer.setTimer(60)}
          >
            60
          </Button>
        </div>
      )}
      Time : {timeleft}
    </div>
  );
}
export default Timer;
