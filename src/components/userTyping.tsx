import Caret from "./caret";
import cn from "classnames";
function UserTyping({
  userInput,
  className,
  words,
}: {
  userInput: string;
  className: string;
  words: string;
}) {
  const typing = userInput.split("");
  return (
    <div className={className}>
      {typing.map((char, index) => {
        return (
          <Characters
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
}
function Characters({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";
  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-primary-400": isCorrect && !isWhiteSpace,
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
}
export default UserTyping;
