import InstallButton from "./components/installButton.tsx";
import InstallPopup from "./components/installPopup.tsx";
import ChatWindow from "./components/chatWindow.tsx";

export default function App() {
  return (
    <>
      <InstallPopup />
      <InstallButton />

      <div className="h-screen bg-[#020617] flex items-center justify-center">
        <ChatWindow />
      </div>
    </>
  );
}