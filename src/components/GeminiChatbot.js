import React, { useState, useEffect, useRef } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from "react-icons/fa";
import "../styles/components/GeminiChatbot.css";
import { getGeminiResponse } from "../utils/geminiService.js";

const GeminiChatbot = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { 
      text: "Hi there! I'm your AI assistant powered by Gemini. How can I help you today?", 
      sender: "bot" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    
    setInput("");
    
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(input);
      
      setMessages(prevMessages => [
        ...prevMessages, 
        { text: response, sender: "bot" }
      ]);
    } catch (error) {
      console.error("Error getting response from Gemini:", error);
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          text: "Sorry, I encountered an error. Please try again later.", 
          sender: "bot" 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-widget">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <FaRobot className="bot-icon" />
          <span>Gemini Assistant</span>
        </div>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.sender === "bot" ? "bot-message" : "user-message"}`}
          >
            <div className="message-avatar">
              {message.sender === "bot" ? <FaRobot /> : <FaUser />}
            </div>
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot-message">
            <div className="message-avatar">
              <FaRobot />
            </div>
            <div className="message-content typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="chatbot-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default GeminiChatbot;