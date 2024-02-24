import FeaturedPosts from "@/components/FeaturedPosts";
import NonFeaturedPosts from "@/components/NonFeaturedPosts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <>
      <Profile />
      <FeaturedPosts />
      <NonFeaturedPosts />
    </>
  );
}
