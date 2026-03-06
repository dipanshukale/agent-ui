import { motion } from "framer-motion";

interface Props {
  message: string;
  isUser: boolean;
}

export default function ChatMessage({ message, isUser }: Props) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >

      <div
        className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm whitespace-pre-line shadow-lg
        ${
          isUser
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
            : "bg-white/10 text-gray-200 border border-white/10"
        }`}
      >
        {message}
      </div>

    </motion.div>

  );
}