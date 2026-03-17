import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#020617] z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl shadow-lg"
      >
        🤖
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-5 text-2xl font-semibold text-white tracking-wide"
      >
        Dipanshu AI Agent
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-400 text-sm mt-2"
      >
        Automate. Communicate. Execute.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex gap-1 mt-6"
      >
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></span>
      </motion.div>
    </motion.div>
  );
}