function UserTyping({
  userInput,
  className,
}: {
  userInput: string;
  className: string;
}) {
  const typing = userInput.split("");
  return (
    <div className={className}>
      {typing.map((char, index) => {
        return <Characters key={`${char}_${index}`} char={char} />;
      })}
    </div>
  );
}
function Characters({ char }: { char: string }) {
  return <span className="text-primary-500">{char}</span>;
}
export default UserTyping;
