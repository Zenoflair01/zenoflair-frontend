// app/api/chat/route.ts
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  const { messages }: { messages: Groq.Chat.ChatCompletionMessageParam[] } =
    await req.json();

  const stream = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    temperature: 0.5,
    max_tokens: 2048,
    stream: true,
    messages,
  });

  const readable = new ReadableStream<string>({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? "";
        controller.enqueue(text);
      }
      controller.close();
    },
  });

  return new Response(readable.pipeThrough(new TextEncoderStream()), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}