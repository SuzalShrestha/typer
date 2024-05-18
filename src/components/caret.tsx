import { motion } from "framer-motion";
export default function Caret() {
  return (
    <motion.div
      aria-hidden="true"
      className="inline-block w-0.5 h-7 bg-yellow-500"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
    ></motion.div>
  );
}
