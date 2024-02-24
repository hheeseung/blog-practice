import { getFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold">Featured Post</h2>
      <ul className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-2">
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
