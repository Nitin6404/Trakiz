'use client';
import React, { useState } from 'react';
import { continueConversation } from '@/app/api/chat/action';
import { readStreamableValue } from 'ai/rsc';
import { Loader2, ChevronLeft, ChevronRight, EllipsisVertical } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ChatAvatar from '@/components/component/Avatar';
import { Button } from '@/components/ui/button';
import { CoreAssistantMessage, CoreSystemMessage, CoreToolMessage, CoreUserMessage } from 'ai';

type CoreMessage = CoreToolMessage | CoreUserMessage | CoreAssistantMessage | CoreSystemMessage;

export default function Chat() {
  const [messages, setMessages] = useState<CoreMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! How can I help you today?',
    } as CoreAssistantMessage // Type assertion
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added state for error handling

  function isCoreMessageRole(role: any): role is CoreMessage['role'] {
    return ['tool', 'user', 'assistant', 'system'].includes(role);
  }

  return (
    <div className="flex flex-col h-full w-full bg-[#141718] overflow-hidden">
      <div className="flex justify-between items-center px-4 py-2 bg-[#1e2122]">
        <ChevronLeft className="w-6 h-6 cursor-pointer text-white" />
        <EllipsisVertical className="w-6 h-6 cursor-pointer text-white" />
      </div>
      <div className="flex flex-col px-4 py-2 h-[500px] overflow-y-scroll">
        {messages.map((m, i) => (
          <div key={i} className="whitespace-pre-wrap flex space-x-2 py-1">
            <ChatAvatar isUser={m.role === 'user'} />
            <div className="flex justify-center items-center text-lg text-white">
              <ReactMarkdown className="font-manrope font-medium text-lg">
                {m.content as string}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full p-4 bg-[#1e2122]">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const role: CoreUserMessage['role'] = 'user'; // Type-safe assignment
            const content = input; // Assuming 'input' is your message content

            if (isCoreMessageRole(role)) {
              const newMessage: CoreMessage = { role, content }; // Safely typed
              const newMessages: CoreMessage[] = [...messages, newMessage];
              setMessages(newMessages);

              setInput('');
              setLoading(true);

              try {
                const result = await continueConversation(newMessages);
                setLoading(false);

                let fullMessage = '';
                for await (const content of readStreamableValue(result.message)) {
                  const words = content ? content.split(' ') : [];
                  for (const word of words) {
                    await new Promise((resolve) => setTimeout(resolve, 50));
                    fullMessage += word + ' ';
                    setMessages([
                      ...newMessages,
                      { role: 'assistant', content: fullMessage } as CoreAssistantMessage,
                    ]);
                  }
                }
              } catch (err: any) {
                setLoading(false);
                setError(err.message || 'An error occurred'); // Properly set error message
              }
            } else {
              console.error('Invalid role:', role);
              // Handle the error case where role is not a valid CoreMessage role
            }
          }}
          className="w-full flex justify-between"
        >
          <input
            type="text"
            className="w-4/5 bg-[#232627] text-white rounded-lg border-[#676767] font-manrope text-base p-2"
            value={input}
            placeholder="Send a message..."
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-center justify-center w-12">
            {loading ? (
              <Loader2 className="animate-spin text-white" />
            ) : (
              <Button className="w-full h-full" type="submit" variant="outline" size="icon">
                <ChevronRight className="h-6 w-6 text-white" />
              </Button>
            )}
          </div>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
