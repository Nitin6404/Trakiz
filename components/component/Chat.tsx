import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Loader2, ChevronLeft, ChevronRight, EllipsisVertical } from 'lucide-react';
import Markdown from 'react-markdown';
import Image from 'next/image';
import ChatAvatar from '@/components/component/Avatar';
import { Button } from '@/components/ui/button';

export default function Chat() {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([
    { role: "model", parts: "I'm here to help you with your productivity. Tell me which goal you want to achieve?" },
  ]);
  const [error, setError] = useState<string | null>(null);
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
  const genAI = new GoogleGenerativeAI(apiKey);
  const [chat, setChat] = useState<any>(null); // Adjust type based on GoogleGenerativeAI API response

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 400,
    responseMimeType: "text/plain",
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  useEffect(() => {
    if (!chat) {
      setChat(model.startChat({ history: [], generationConfig }));
    }
  }, [chat, model]);

  async function chatting() {
    setLoading(true);
    setHistory((oldHistory) => [
      ...oldHistory,
      { role: "user", parts: input },
      { role: "model", parts: "Thinking..." },
    ]);
    setInput("");

    try {
      const result = await chat.sendMessage(`
        Your task is to break down the provided task into smaller tasks or to-dos. 
        If necessary, further break them down into sub-tasks or sub-todos, including proper dates and timelines. 
        Respond in a clear, simple, and organized manner. If the user asks something unrelated to their tasks, politely decline the request. 
        At the start of each chat session, greet the user with a reference to their past tasks or to-dos. 
        Additionally, engage in a conversation with the user about their goals or tasks using their to-do lists. 
        If you need additional information or clarification, feel free to ask the user questions.
        Task from user: ${input}
      `);

      const response = await result.response;
      const text = await response.text();
      setLoading(false);

      setHistory((oldHistory) => {
        const newHistory = oldHistory.slice(0, oldHistory.length - 1);
        newHistory.push({ role: "model", parts: text });
        return newHistory;
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError("Oops! Something went wrong.");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      chatting();
    }
  }

  return (
    <div className="flex flex-col h-full w-full bg-[#141718] overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-[#1e2122]">
        <ChevronLeft className="w-6 h-6 cursor-pointer text-white" />
        <EllipsisVertical className="w-6 h-6 cursor-pointer text-white" />
      </div>
      <div className="flex text-sm md:text-base flex-col pt-10 pb-16 w-full flex-grow flex-1 rounded-3xl shadow-md overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            className={`chat ${item.role === "model" ? "chat-start" : "chat-end"
              }`}
          >
            <div className="flex chat-image avatar space-x-5 p-1">
              <div className="w-6 md:w-10 rounded-full">
                <ChatAvatar isUser={item.role === "model" ? false : true} />
              </div>
              <div
                className={`chat-bubble font-medium ${item.role === "model" ? "chat-bubble-primary" : ""
                  }`}
              >
                <Markdown className='p-2'>{item.parts}</Markdown>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex justify-center w-full p-4 bg-[#1e2122]">
        <textarea
          value={input}
          required
          rows={1}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start Chatting..."
          className="textarea backdrop-blur textarea-primary w-full mx-auto bg-opacity-60 font-medium shadow rounded-3xl"
        />
        <div className="flex items-center justify-center w-12">
          <Button
            className={`btn rounded-3xl shadow-md ${loading
              ? "btn-accent cursor-wait pointer-events-none"
              : "btn-primary"
              }`}
            title="send"
            onClick={chatting}
          >
            {loading ? (
              <Loader2 className="h-6 w-6 text-white" />
            ) : (
              <ChevronRight className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
