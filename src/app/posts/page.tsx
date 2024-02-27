import FilteredPost from "@/components/FilteredPost";
import { getPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilteredPost posts={posts} categories={categories} />;
}
