'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google'

const baseUrl = process.env.NEXT_PUBLIC_GEMINI_BASE_URI!;
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const google = createGoogleGenerativeAI({
    baseUrl: baseUrl,
    apiKey: apiKey,
    });

export async function continueConversation(messages: CoreMessage[]) {
  const result = await streamText({
    model: google('models/gemini-1.5-pro-latest'),
    system: 'Your task is to break down the provided task into smaller tasks or to-dos. If necessary, further break them down into sub-tasks or sub-todos, including proper dates and timelines. Respond in a clear, simple, and organized manner. If the user asks something unrelated to their tasks, politely decline the request. At the start of each chat session, greet the user with a reference to their past tasks or to-dos. Additionally, engage in a conversation with the user about their goals or tasks using their to-do lists. If you need additional information or clarification, feel free to ask the user questions.',
    messages,
  });
  const data = { test: 'hello' };

  const stream = createStreamableValue(result.textStream);
  return { message: stream.value, data };
}