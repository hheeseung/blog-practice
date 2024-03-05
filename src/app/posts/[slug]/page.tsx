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
  const { path, title, date, description } = posts;

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
      <article className="relative px-5 py-10">
        <span className="absolute right-6">{date}</span>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-xl font-semibold border-b-2 border-sky-500 py-2 mb-2 w-fit">
          {description}
        </p>
        <MarkdownPost posts={posts} />
      </article>
      <PageNav posts={posts} />
    </section>
  );
}
