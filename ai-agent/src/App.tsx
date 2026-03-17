import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen.tsx";
import ChatWindow from "./components/chatWindow.tsx";
import InstallPopup from "./components/installPopup.tsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 sec splash
  }, []);

  return (
    <>
      {loading && <SplashScreen />}
      <InstallPopup/>
      <div className="h-screen bg-[#020617] flex items-center justify-center">
        <ChatWindow />
      </div>
    </>
  );
}