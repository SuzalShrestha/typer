import "./App.css";
import Words from "./components/words";
import { faker } from "@faker-js/faker";
import Timer from "./components/timer";
import RestartButton from "./components/restartButton";
import Results from "./components/results";
import UserTyping from "./components/userTyping";
const words = faker.lorem.words(10);
function App() {
  return (
    <>
      <Timer timeleft={60} />;
      <div className="mt-3 text-3xl max-w-xl relative leading-relaxed break-all">
        <Words words={words} />;
        <UserTyping userInput={words} className="absolute inset-0" />
      </div>
      <RestartButton
        className="text-slate-500 mx-auto mt-10"
        onClick={() => null}
      />
      <Results errors={10} accuracyPercent={90} total={100} className="mt-10" />
    </>
  );
}

export default App;
