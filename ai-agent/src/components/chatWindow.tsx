import { useState, useEffect, useRef } from "react";
import ChatMessage from "./chatMessage";
import ChatInput from "./chatInput";
import { sendMessage } from "../services/api.ts";
import { motion } from "framer-motion";

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatWindow() {

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth"
    });

  }, [messages, loading]);

  const handleSend = async (message: string) => {

    const userMessage = { text: message, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const aiResponse = await sendMessage(message);

      const aiMessage = {
        text: aiResponse,
        isUser: false
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const suggestions = [
    "What type of cuisine your restaurant provides?",
    "How can I call them?",
    "What type of service you provide?",
    "What do you know?"
  ];

  return (

    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
      w-full
      max-w-4xl
      h-[80vh]

      flex flex-col
      overflow-hidden

      rounded-2xl
      border border-white/10

      shadow-[0_20px_80px_rgba(0,0,0,0.6)]

      bg-gradient-to-br
      from-[#0f172a]
      via-[#020617]
      to-[#020617]
      "
    >

      {/* Header */}

      <div
        className="
        p-4
        border-b border-white/10
        flex justify-between items-center
        bg-white/5
        "
      >

        <h1 className="text-lg font-semibold text-white">
          Dipanshu AI Assistant
        </h1>

        <span
          className="
          text-xs
          text-cyan-400
          bg-cyan-400/10
          border border-cyan-400/20
          px-3 py-1
          rounded-full
          "
        >
          AI Agent
        </span>

      </div>


      {/* Messages Area */}

      <div
        ref={chatRef}
        className="
        flex-1
        overflow-y-auto
        px-6
        py-6
        space-y-5
        "
      >

        {messages.length === 0 && (

          <div className="flex flex-col items-center justify-center text-center h-full">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
              text-3xl
              font-bold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-400
              to-blue-400
              mb-4
              "
            >
              Your Intelligent AI Agent
            </motion.h2>

            <p className="text-gray-400 max-w-md mb-8">
              The agent is still learning responses are generated from the knowledge currently available.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">

              {suggestions.map((s, i) => (

                <button
                  key={i}
                  onClick={() => handleSend(s)}
                  className="
                  bg-white/5
                  hover:bg-white/10
                  border border-white/10
                  text-gray-200
                  px-4 py-3
                  rounded-xl
                  text-sm
                  transition
                  "
                >
                  {s}
                </button>

              ))}

            </div>

          </div>

        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg.text} isUser={msg.isUser} />
        ))}

        {loading && (

          <div className="flex gap-2 items-center text-cyan-300 text-sm">

            <div className="flex gap-1">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-150">.</span>
              <span className="animate-bounce delay-300">.</span>
            </div>

            AI thinking...

          </div>

        )}

      </div>


      {/* Input (Always Bottom) */}

      <div
        className="
        border-t border-white/10
        bg-[#020617]
        p-4
        "
      >

        <ChatInput onSend={handleSend} />

      </div>

    </motion.div>

  );
}