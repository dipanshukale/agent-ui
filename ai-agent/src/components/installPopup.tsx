import { motion } from "framer-motion";
import useInstallPrompt from "../components/useInstallPrompt.tsx";

export default function InstallPopup() {
  const { installable, installApp } = useInstallPrompt();

  if (!installable) return null;

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
      fixed bottom-0 left-0 right-0
      bg-[#020617]
      border-t border-white/10
      p-4 flex justify-between items-center
      "
    >
      <div>
        <h2 className="text-white font-semibold">Install AI Agent</h2>
        <p className="text-gray-400 text-sm">
          Get app-like experience
        </p>
      </div>
      <button
        onClick={installApp}
        className="
        bg-cyan-500 text-white px-4 py-2 rounded-lg
        "
      >
        Install
      </button>
    </motion.div>
  );
}