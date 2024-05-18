import { motion } from "framer-motion";
import { Engine } from "../hooks/useEngine";
function Results({
  state,
  errors,
  accuracyPercent,
  total,
  className,
}: {
  state: Engine;
  errors: number;
  accuracyPercent: number;
  total: number;
  className: string;
}) {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.5 };
  if (state !== "end") {
    return null;
  }
  return (
    <motion.ul
      className={`text-yellow-400 flex flex-col items-center space-y-3 ${className}`}
    >
      <motion.li
        className="text-xl font-semibold"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.1 }}
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Accuracy: {accuracyPercent}%
      </motion.li>
      <motion.li
        className="text-red-500"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.4 }}
      >
        Typed: {total}
      </motion.li>
    </motion.ul>
  );
}
export default Results;
