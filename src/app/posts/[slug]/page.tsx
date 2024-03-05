import PageNav from "@/components/PageNav";
import PostContent from "@/components/PostContent";
import { getPostDetails } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  const posts = await getPostDetails(slug);
  const { path, title } = posts;

  return (
    <section className="rounded-xl shadow-lg mt-2 mb-10">
      <Image
        className="w-full max-h-[500px] object-cover rounded-tl-xl rounded-tr-xl"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        priority
      />
      <PostContent posts={posts} />
      <PageNav posts={posts} />
    </section>
  );
}
