import { getNonfeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";
import CarouselCard from "./CarouselCard";

export default async function NonFeaturedPosts() {
  const posts = await getNonfeaturedPosts();

  return (
    <div className="p-2 mt-3">
      <h2 className="text-2xl font-bold">You May Like</h2>
      <ul>
        <CarouselCard>
          {posts.map(({ title, description, category, date, path }) => (
            <PostCard
              key={path}
              path={path}
              title={title}
              description={description}
              category={category}
              date={date}
            />
          ))}
        </CarouselCard>
      </ul>
    </div>
  );
}
