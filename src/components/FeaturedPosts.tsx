import { getFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <div className="p-2 mt-3">
      <h2 className="text-2xl font-bold">Featured Post</h2>
      <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-2">
        {posts.map(({ title, description, category, date, path }) => (
          <PostCard
            key={path}
            path={path}
            title={title}
            description={description}
            date={date}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
}
