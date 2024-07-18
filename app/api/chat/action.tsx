'use server';

import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

const baseUrl = process.env.NEXT_PUBLIC_GEMINI_BASE_URI!;
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
const google = createGoogleGenerativeAI({
  baseUrl: baseUrl,
  apiKey: apiKey,
});

interface ContinueConversationParams {
  messages: CoreMessage[];
}

export async function continueConversation({ messages }: ContinueConversationParams) {
  const result = await streamText({
    model: google('models/gemini-1.5-pro-latest'),
    messages,
  });
  const data = { test: 'hello' };

  const stream = createStreamableValue(result.textStream);
  return { message: stream.value, data };
}
