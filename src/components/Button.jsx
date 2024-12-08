import { motion } from "framer-motion";

export default function Button({ title, onClick, className = "" }) {
  return (
    <motion.button
      className={`py-2 px-6 rounded-lg transition-transform duration-300 border-2 tex bg-transparent hover:border-gray-200 hover:text-gray-200 mt-4 dark:border-zinc-400 dark:text-zinc-400 ${className}`}
      whileHover={{ scale: 1.18 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.01 }}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
}
