"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Highlight, themes } from "prism-react-renderer";

type Msg = { role: "user" | "assistant"; content: string };

export default function Chat() {
  const [list, setList] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [abort, setAbort] = useState<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 1e9, behavior: "auto" });
  }, [list]);

  const send = async () => {
    if (!input.trim() || streaming) return;
    const userMsg = { role: "user", content: input };
    const newList = [...list, userMsg];
    setList(newList);
    setInput("");
    setStreaming(true);
    const ctrl = new AbortController();
    setAbort(ctrl);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "system", content: "You are a helpful coding assistant." }, ...newList],
      }),
      signal: ctrl.signal,
    });

    if (!res.ok || !res.body) return setStreaming(false);
    const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
    let assistant = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      assistant += value;
      setList([...newList, { role: "assistant", content: assistant }]);
    }
    setStreaming(false);
    setAbort(null);
  };

  const stop = () => {
    abort?.abort();
    setStreaming(false);
    setAbort(null);
  };

  return (
    <div className="flex flex-col h-screen">
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-background text-foreground max-h-screen">
        {list.map((m, i) => (
          <div key={i} className={`text-sm ${m.role === "user" ? "text-right" : "text-left"}`}>
            <Bubble content={m.content} isUser={m.role === "user"} />
          </div>
        ))}
        {streaming && <div className="text-left text-gray-500 animate-pulse">▍</div>}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="flex p-4 gap-2 border-t border-gray-700 bg-gray-800"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-700 text-white"
          placeholder="Ask something..."
          disabled={streaming}
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 rounded" disabled={streaming}>
          Send
        </button>
        {streaming && (
          <button type="button" onClick={stop} className="px-4 py-2 bg-red-600 rounded">
            Stop
          </button>
        )}
      </form>
    </div>
  );
}

function Bubble({ content, isUser }: { content: string; isUser: boolean }) {
  return (
    <div className={`inline-block p-3 rounded-xl ${isUser ? "bg-blue-600 text-white" : "bg-purple-600 text-white" }`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <Highlight theme={themes.vsDark} code={String(children).trim()} language={match[1]}>
                {({ style, tokens, getLineProps, getTokenProps }) => (
                  <pre style={style} className="p-3 overflow-x-auto text-sm rounded bg-gray-800">
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, j) => (
                          <span key={j} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            ) : (
              <code className="bg-gray-600 px-1 rounded">{children}</code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
