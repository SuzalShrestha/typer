import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

function RestartButton({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) {
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const handleRestart = () => {
    ButtonRef.current?.blur();
    onClick();
  };
  return (
    <button
      ref={ButtonRef}
      onClick={handleRestart}
      className={`block hover:bg-slate-700/50 rounded px-8 py-2 ${className}`}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
}
export default RestartButton;
