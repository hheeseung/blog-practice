import MarkdownPost from "@/components/MarkdownPost";
import PageNav from "@/components/PageNav";
import { getPostDetails } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  const posts = await getPostDetails(slug);

  return (
    <section className="rounded-xl shadow-lg mt-2 mb-10">
      <Image
        src={`/images/posts/${posts.path}.png`}
        alt="banner"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
        priority
      />
      <article className="relative px-5 py-10">
        <span className="absolute right-6">{posts.date}</span>
        <h1 className="text-5xl font-bold">{posts.title}</h1>
        <p className="text-xl font-semibold border-b-2 border-sky-500 py-2 mb-2 w-fit">
          {posts.description}
        </p>
        <MarkdownPost posts={posts} />
      </article>
      <PageNav path={slug} />
    </section>
  );
}
