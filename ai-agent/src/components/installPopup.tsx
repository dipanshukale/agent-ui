import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useInstallPrompt from "../components/useInstallPrompt.tsx";

export default function InstallPopup() {
  const { installable, installApp } = useInstallPrompt();

  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem("install-dismissed");

    if (!alreadyDismissed && installable) {
      setShowPopup(true);
    } else if (alreadyDismissed) {
      setDismissed(true);
    }
  }, [installable]);

  const handleCancel = () => {
    localStorage.setItem("install-dismissed", "true");
    setShowPopup(false);
    setDismissed(true);
  };

  if (!installable) return null;

  return (
    <>
      {/* CENTER POPUP */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#020617] p-6 rounded-2xl w-[90%] max-w-sm text-center relative"
          >
            {/* Close Button */}
            <button
              onClick={handleCancel}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="text-3xl mb-3">🤖</div>

            <h2 className="text-white text-lg font-semibold mb-2">
              Install AI Agent
            </h2>

            <p className="text-gray-400 text-sm mb-5">
              Get faster access & app-like experience
            </p>

            <button
              onClick={installApp}
              className="bg-cyan-500 px-4 py-2 rounded-lg text-white w-full"
            >
              Install App
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* FLOATING BUTTON (after cancel) */}
      {dismissed && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setShowPopup(true)}
          className="
          fixed top-5 right-5
          w-12 h-12
          rounded-full
          bg-cyan-500
          text-white
          flex items-center justify-center
          shadow-lg
          z-40
          hover:scale-110 transition
          "
        >
          ⬇
        </motion.button>
      )}
    </>
  );
}