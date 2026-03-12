import { useState, useEffect, useRef } from "react";
import ChatMessage from "./chatMessage";
import ChatInput from "./chatInput";
import { sendMessage } from "../services/api";
import { motion } from "framer-motion";
import { Bot, Mail } from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
}

export default function ChatWindow() {

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [recipient, setRecipient] = useState<string | null>(null);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth"
    });

  }, [messages, loading]);

  const handleSend = async (message: string) => {

    const emailMatch = message.match(
      /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
    );

    if (emailMatch) {
      setRecipient(emailMatch[0]);
    }

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

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
      w-full
      max-w-5xl
      h-[85vh]
      flex flex-col
      rounded-2xl
      overflow-hidden
      border border-white/10
      bg-[#020617]
      shadow-[0_30px_90px_rgba(0,0,0,0.8)]
      "
    >

      {/* Header */}

      <div
        className="
        flex
        items-center
        justify-between
        px-6
        py-4
        border-b border-white/10
        bg-white/5
        "
      >

        <div className="flex items-center gap-3">

          <div className="p-2 bg-cyan-500/10 rounded-lg">
            <Bot size={20} className="text-cyan-400" />
          </div>

          <div>

            <h1 className="text-white font-semibold text-lg">
              Dipanshu AI Automation Agent
            </h1>

            <p className="text-xs text-gray-400">
              Chat • Email Automation • Task Assistance
            </p>

          </div>

        </div>

        {recipient && (

          <div
            className="
            flex items-center gap-2
            text-xs
            px-3 py-1
            rounded-full
            border
            border-purple-400/30
            bg-purple-400/10
            text-purple-300
            "
          >

            <Mail size={14} />

            {recipient}

          </div>

        )}

      </div>


      {/* Chat Area */}

      <div
        ref={chatRef}
        className="
        flex-1
        overflow-y-auto
        px-6
        py-6
        space-y-6
        "
      >

        {messages.length === 0 && (

          <div className="h-full flex flex-col items-center justify-center text-center">

            <h2
              className="
              text-3xl
              font-semibold
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-400
              to-blue-400
              mb-4
              "
            >
             AI Automation Workspace
            </h2>

            <p className="text-gray-400 max-w-md">
              Ask the agent to send emails, draft messages,
              or automate professional workflows.
            </p>

          </div>

        )}

        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg.text} isUser={msg.isUser} />
        ))}

        {loading && (

          <div className="flex items-center gap-3 text-cyan-300 text-sm">

            <div className="flex gap-1">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-300"></span>
            </div>

            Agent executing task...

          </div>

        )}

      </div>


      {/* Input */}

      <div
        className="
        border-t border-white/10
        p-4
        bg-[#020617]
        "
      >

        <ChatInput onSend={handleSend} />

      </div>

    </motion.div>

  );
}