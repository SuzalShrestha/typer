import "./App.css";
import Words from "./components/words";
import { faker } from "@faker-js/faker";
import Timer from "./components/timer";
import RestartButton from "./components/restartButton";
import Results from "./components/results";
import UserTyping from "./components/userTyping";
import { ReactNode } from "react";
const words = faker.lorem.words(10);
function App() {
  return (
    <>
      <Timer timeleft={60} />;
      <WordContainer>
        <Words words={words} />;
        <UserTyping userInput={words} className="absolute inset-0" />
      </WordContainer>
      <RestartButton
        className="text-slate-500 mx-auto mt-10"
        onClick={() => null}
      />
      <Results errors={10} accuracyPercent={90} total={100} className="mt-10" />
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
