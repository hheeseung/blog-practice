import { PostData } from "@/service/posts";
import MarkdownPost from "./MarkdownPost";

export default function PostContent({ posts }: { posts: PostData }) {
  const { date, title, description } = posts;

  return (
    <article className="relative px-5 py-10">
      <span className="absolute right-6">{date}</span>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-xl font-semibold border-b-2 border-sky-500 py-2 mb-2 w-fit">
        {description}
      </p>
      <MarkdownPost posts={posts} />
    </article>
  );
}
