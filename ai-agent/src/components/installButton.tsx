import { motion } from "framer-motion";
import useInstallPrompt from "../components/useInstallPrompt.tsx";

export default function InstallButton() {
  const { installable, installApp } = useInstallPrompt();

  if (!installable) return null;

  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      onClick={installApp}
      className="
      fixed bottom-6 right-6
      bg-gradient-to-r from-cyan-500 to-blue-500
      text-white px-5 py-3 rounded-xl
      shadow-lg hover:scale-105 transition
      "
    >
      Install App 🚀
    </motion.button>
  );
}