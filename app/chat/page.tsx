'use client';

import { type CoreMessage } from 'ai';
import { useState } from 'react';
import { continueConversation } from '@/app/api/chat/action';
import { readStreamableValue } from 'ai/rsc';

import ChatAvatar from '@/components/component/Avatar'
import {
    ChevronLeft,
    ChevronRight,
    EllipsisVertical,
    Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button';

// Force the page to be dynamic and allow streaming responses up to 30 seconds
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export default function Chat() {
  // Initialize state for messages, input, and data
  const [messages, setMessages] = useState<CoreMessage[]>([]);
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>();

  return (
    // Main container
    <div className="flex justify-center items-center w-full h-full">
      <div className='flex flex-col rounded-lg h-full w-[420px] bg-[#141718] overflow-hidden'>
        {/* Back button */}
        <div className="flex justify-between items-center px-8 py-8 w-full mt-0">
          <ChevronLeft className="w-8 h-8 cursor-pointer" />
          <EllipsisVertical className="w-8 h-8 cursor-pointer" />
        </div>
        {/* Messages container */}
        <div className="flex flex-col w-full max-w-md px-8 h-[600px] overflow-y-scroll">
          {messages.map((m, i) => (
            // Message item
            <div key={i} className="whitespace-pre-wrap flex p-2 space-x-5 ">
              <div className='flex justify-start'>
                <ChatAvatar isUser={m.role === 'user'} />
              </div>
              <div className='flex justify-center items-center text-lg'>
                {m.role === 'user' ?
                  <p className='font-manrope font-medium text-lg'>{m.content as string}</p> :
                  <p className='font-manrope font-medium text-lg bg-muted-foreground'>{m.content as string}</p>}
              </div>
            </div>
          ))}
        </div>
        {/* Form container */}
        <div className='flex justify-center w-full'>
          <div className="fixed bottom-5 w-[353px] h-[48px] mx-auto stretch">
            <form
              onSubmit={async e => {
                e.preventDefault();
                // Update messages and input
                const newMessages: CoreMessage[] = [
                  ...messages,
                  { content: input, role: 'user' },
                ];
                setMessages(newMessages);
                setInput('');

                // Call API and update data
                const result = await continueConversation(newMessages);
                setData(result.data);

                // Stream responses and update messages
                for await (const content of readStreamableValue(result.message)) {
                  setMessages([
                    ...newMessages,
                    {
                      role: 'assistant',
                      content: content as string,
                    },
                  ]);
                }
              }}
              className='h-full w-full flex justify-between '
            >
              {/* Input field */}
              <input
                type=''
                className="w-4/5 h-full bg-[#232627] rounded-lg border-[#676767] font-manrope text-base p-3"
                value={input}
                placeholder="Send a message..."
                onChange={e => setInput(e.target.value)}
              />
              <div className='flex w-12'>
                <Button className='w-full h-full' type='submit' variant="outline" size="icon">
                  <ChevronRight width={48} height={48} className="h-6 w-6" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}