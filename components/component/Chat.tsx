'use client';
import React, { useState } from 'react';
import { continueConversation } from '@/app/api/chat/action';
import { readStreamableValue } from 'ai/rsc';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import ChatAvatar from '@/components/component/Avatar';
import { ChevronLeft, ChevronRight, EllipsisVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoreAssistantMessage, CoreSystemMessage, CoreToolMessage, CoreUserMessage } from 'ai';
import { Card } from '@/components/ui/card';

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
    // <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-col rounded-lg h-full w-[420px] bg-[#141718] overflow-hidden">
        <div className="flex justify-between items-center px-8 py-8 w-full mt-0">
          <ChevronLeft className="w-8 h-8 cursor-pointer" />
          <EllipsisVertical className="w-8 h-8 cursor-pointer" />
        </div>
        <div className="flex flex-col w-full max-w-md px-8 h-[600px] overflow-y-scroll">
          {messages.map((m, i) => (
            <div key={i} className="whitespace-pre-wrap flex p-2 space-x-5">
              <ChatAvatar isUser={m.role === 'user'} />
              <div className="flex justify-center items-center text-lg">
                {m.role === 'user' ? (
                  <ReactMarkdown className="font-manrope font-medium text-lg">
                    {/* Ensure content is a string */}
                    {m.content as string}
                  </ReactMarkdown>
                ) : (
                  <ReactMarkdown className="font-manrope font-medium text-lg">
                    {/* Ensure content is a string */}
                    {m.content as string}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <div className="fixed bottom-5 w-[353px] h-[48px] mx-auto stretch">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const role: CoreUserMessage['role'] = 'user'; // Type-safe assignment
                const content = input; // Assuming 'input' is your message content

                if (isCoreMessageRole(role)) {
                  const newMessage: CoreMessage = { role, content }; // Safely typed
                  const newMessages: CoreMessage[] = [...messages, newMessage];
                  setMessages(
                    newMessages
                  );

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
                        setMessages(
                          [
                            ...newMessages,
                            { role: 'assistant', content: fullMessage } as CoreAssistantMessage, // Ensure type compatibility
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
              className="h-full w-full flex justify-between"
            >
              <input
                type="text"
                className="w-4/5 h-full bg-[#232627] rounded-lg border-[#676767] font-manrope text-base p-3"
                value={input}
                placeholder="Send a message..."
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="flex w-12 items-center justify-center">
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <Button className="w-full h-full" type="submit" variant="outline" size="icon">
                    <ChevronRight width={48} height={48} className="h-6 w-6" />
                  </Button>
                )}
              </div>
            </form>
            {/* Display error if any */}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
  );
}
