import { useState, useRef, useEffect } from "react";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";





const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { text: message, isBot: false }]);
    setMessage("");
    setIsLoading(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://api.your-chat-service.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      

      
    
    

      if (!response.ok) {
        throw new Error("Server error, please try again.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { text: data.reply, isBot: true }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error: Unable to connect to the server.", isBot: true, isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Floating Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 ${
          isOpen ? "scale-0" : "scale-100 hover:scale-110"
        }`}
      >
        <FiMessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`absolute bottom-0 left-0 w-80 bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-200 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-t-xl flex justify-between items-center">
          <h3 className="font-semibold">مساعدك الذكي - حلول</h3>
          <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 rounded-full p-1">
            <FiX size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-96 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-xs p-3 rounded-xl shadow-lg ${
                    msg.isError
                      ? "bg-red-500 text-white font-semibold" // 🔴 Red error message
                      : msg.isBot
                      ? "bg-white text-gray-800 border border-gray-300"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-xs p-3 rounded-xl bg-white text-gray-800 shadow-md">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <form onSubmit={handleSubmit} className="p-4 border-t bg-white bg-opacity-80 backdrop-blur-md">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="اكتب رسالتك..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                disabled={isLoading || !message.trim()}
              >
                <FiSend size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
