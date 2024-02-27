import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function FilteredPostCard({ posts }: Props) {
  return (
    <ul className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-2">
      {posts.map((post) => (
        <PostCard
          key={post.path}
          title={post.title}
          description={post.description}
          category={post.category}
          date={post.date}
          path={post.path}
        />
      ))}
    </ul>
  );
}
