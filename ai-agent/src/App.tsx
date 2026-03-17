import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen.tsx";
import ChatWindow from "./components/chatWindow.tsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && <SplashScreen />}
      <div className="h-screen bg-[#020617] flex items-center justify-center">
        <ChatWindow />
      </div>
    </>
  );
}