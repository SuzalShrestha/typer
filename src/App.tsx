import "./App.css";
import Words from "./components/words";
import Timer from "./components/timer";
import RestartButton from "./components/restartButton";
import Results from "./components/results";
import UserTyping from "./components/userTyping";
import useEngine from "./hooks/useEngine";
import { ReactNode } from "react";
import { calculateAccuracyPercentage, formatPercentage } from "./utils/helper";
function App() {
  const { state, words, timeLeft, userTyped, errors, totalTyped, restart } =
    useEngine();
  return (
    <>
      <Timer timeleft={timeLeft} state={state} />
      <WordContainer>
        <Words words={words} />
        <UserTyping
          userInput={userTyped}
          words={words}
          className="absolute inset-0"
        />
      </WordContainer>
      <RestartButton
        className="text-slate-500 mx-auto mt-10"
        onClick={restart}
      />
      <Results
        state={state}
        errors={errors}
        accuracyPercent={
          +formatPercentage(calculateAccuracyPercentage(errors, totalTyped))
        }
        total={totalTyped}
        className="mt-10"
      />
    </>
  );
}
const WordContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-3 text-3xl max-w-xl relative leading-relaxed break-all">
      {children}
    </div>
  );
};
export default App;
