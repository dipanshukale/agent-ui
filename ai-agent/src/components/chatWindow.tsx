import { useState, useEffect, useRef } from "react";
import ChatMessage from "./chatMessage.tsx";
import ChatInput from "./chatInput.tsx";
import { sendMessage } from "../services/api";
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
      behavior: "smooth",
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
        isUser: false,
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const suggestions = [
    "What type of cusine your restaurant provides?",
    "How can I call them?",
    "what type of service you provide ?",
    "What do you know?"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
      w-full
      max-w-4xl
      h-screen
      md:h-[85vh]
      flex flex-col
      backdrop-blur-xl
      bg-white/5
      border border-white/10
      rounded-none md:rounded-3xl
      shadow-2xl
      overflow-hidden
      "
    >

      {/* Header */}
      <div className="p-4 md:p-5 border-b border-white/10 flex justify-between items-center">

        <h1 className="text-white text-lg font-semibold">
          Dipanshu AI Assistant
        </h1>

        <span className="text-xs text-purple-400">
          Intelligent Agent
        </span>

      </div>

      {/* Chat Section */}
      <div
        ref={chatRef}
        className="
        flex-1
        overflow-y-auto
        px-4 md:px-6
        py-4 md:py-6
        space-y-4
        "
      >

        {/* Welcome UI */}
        {messages.length === 0 && (

          <div className="flex flex-col items-center justify-center text-center h-full">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl md:text-4xl font-bold text-white mb-4"
            >
              Welcome to Dipanshu's AI Assistant
            </motion.h2>

            <p className="text-gray-400 max-w-md mb-8 px-2">
              Ask anything about projects, services, or technology.
              Your intelligent AI assistant is ready to help.
            </p>

            {/* Suggestions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg px-2">

              {suggestions.map((s, i) => (

                <button
                  key={i}
                  onClick={() => handleSend(s)}
                  className="
                  bg-white/5
                  hover:bg-white/10
                  border border-white/10
                  text-gray-200
                  px-3 py-3
                  rounded-xl
                  text-sm
                  transition
                  w-full
                  "
                >
                  {s}
                </button>

              ))}

            </div>

          </div>

        )}

        {/* Messages */}
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg.text} isUser={msg.isUser} />
        ))}

        {/* AI thinking animation */}
        {loading && (

          <div className="flex gap-2 items-center text-gray-400 text-sm">

            <div className="flex gap-1">
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-150">.</span>
              <span className="animate-bounce delay-300">.</span>
            </div>

            AI thinking...

          </div>

        )}

      </div>

      {/* Input Section */}
      <div className="border-t border-white/10 bg-black/30 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">

        <ChatInput onSend={handleSend} />

      </div>

    </motion.div>
  );
}