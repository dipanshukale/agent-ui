import { useState, useRef } from "react";
import { FiSend } from "react-icons/fi";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {

  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {

    if (!input.trim()) return;

    onSend(input);

    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    setInput(e.target.value);

    const el = textareaRef.current;

    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";

  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }

  };

  return (

    <div
      className="
      w-full
      flex items-end
      gap-3
      "
    >

      {/* Textarea */}

      <textarea
        ref={textareaRef}
        value={input}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Ask your AI assistant..."
        className="
        flex-1
        resize-none
        max-h-40
        overflow-y-auto

        px-4 py-3
        rounded-xl

        text-white
        placeholder-gray-400

        bg-[#0f172a]
        border border-white/10

        focus:outline-none
        focus:ring-2
        focus:ring-cyan-500

        transition
        "
      />

      {/* Send Button */}

      <button
        onClick={handleSend}
        className="
        flex items-center justify-center
        w-11 h-11
        rounded-xl

        bg-gradient-to-r
        from-cyan-500
        to-blue-500

        hover:scale-105
        active:scale-95

        transition-all
        duration-200

        shadow-[0_0_20px_rgba(34,211,238,0.35)]
        "
      >
        <FiSend size={18} color="white" />
      </button>

    </div>

  );
}