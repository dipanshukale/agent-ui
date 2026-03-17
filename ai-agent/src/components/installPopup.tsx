import { motion } from "framer-motion";
import useInstallPrompt from "../components/useInstallPrompt.tsx";

export default function InstallPopup() {
  const { installable, installApp } = useInstallPrompt();

  if (!installable) return null;

  return (
    <motion.div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-[#020617] p-6 rounded-2xl w-[90%] max-w-sm text-center">
        <h2 className="text-white text-lg font-semibold mb-2">
          Install AI Agent
        </h2>
        <p className="text-gray-400 text-sm mb-4">Get full app experience</p>

        <button
          onClick={installApp}
          className="bg-cyan-500 px-4 py-2 rounded-lg text-white w-full"
        >
          Install App
        </button>
      </div>
    </motion.div>
  );
}
