import { useState } from "react";
import { FiSend } from "react-icons/fi";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {

  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

    onSend(input);

    setInput("");

  };

  return (

    <div className="p-4 border-t border-white/10 bg-black/20 backdrop-blur-xl">

      <div className="flex items-center gap-3">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask your AI assistant..."
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3
          text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          onClick={handleSend}
          className="p-3 rounded-xl
          bg-gradient-to-r from-purple-600 to-indigo-600
          hover:scale-105
          transition-transform
          shadow-lg"
        >
          <FiSend size={18} color="white" />
        </button>

      </div>

    </div>

  );
}