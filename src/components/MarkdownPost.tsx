"use client";
import { PostData } from "@/service/posts";
import Image from "next/image";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

type Props = {
  posts: PostData;
};

export default function MarkdownPost({ posts }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className="prose-lg prose-headings:font-bold prose-code:bg-neutral-100 prose-code:rounded-md prose-code:px-1 prose-blockquote:border-l-4 prose-a:underline prose-li:list-disc"
      children={posts.content}
      components={{
        code(props: any) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              {...rest}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={oneDark}
            />
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image: any) => (
          <Image
            className="w-full max-h-96 object-cover my-2 rounded-xl"
            src={image.src || ""}
            alt={image.alt || ""}
            width={760}
            height={420}
            priority
          />
        ),
      }}
    />
  );
}
