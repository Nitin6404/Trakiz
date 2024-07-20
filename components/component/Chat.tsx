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
    maxOutputTokens: 2000,
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
        Use proper formatting and spacing between paragraphs to make the text more readable and scanneable.
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
      <div className="flex justify-between items-center mt-8 mx-9">
        <div className='h-8 w-8 flex justify-center items-center rounded-lg shadow-lg bg-[#232627]'>
        <ChevronLeft height={15} width={15} className="cursor-pointer text-white" />
        </div>
      </div>
      <div className="flex text-sm md:text-base flex-col pt-5 w-full flex-grow flex-1 overflow-y-auto">
        {history.map((item, index) => (
          <div
            key={index}
            className={`chat ${item.role === "model" ? "chat-start bg-[#232627]" : "chat-end"
              }`}
          >
            <div className={`flex ${item.role === "model" ? "flex-col" : "items-center py-3 space-x-2"} chat-image avatar p-1`}>
              <div className={`rounded-full ${item.role === "model" ? "pt-3" : "flex justify-center items-center"} ml-5`}>
                <ChatAvatar isUser={item.role === "model" ? false : true} />
              </div>
              <div
                className={`flex justify-start items-center font-medium font-manrope text-sm ${item.role === "model" ? "chat-bubble-primary pb-3 ml-5 text-[#A0A0A5]" : ""
                  }`}
              >
                <Markdown className={`${item.role === "model" ? "mx-2 pt-2" : ""}`}>{item.parts}</Markdown>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex justify-center w-full p-4 space-x-4">
        <textarea
          value={input}
          required
          rows={1}
          onKeyDown={handleKeyDown}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start Chatting..."
          className="textarea w-[90%] bg-[#232627] font-normal text-base rounded-md py-2.5 px-3.5"
        />
        <div className="flex items-center justify-center">
          <Button
            className="bg-[#232627] h-11 w-11 p-2 rounded-md"
            title="send"
            onClick={chatting}
          >
            {loading ? (
              <Loader2 className="h-6 w-6 text-white animate-spin" />
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
