import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getPosts } from "@/service/posts";
import Link from "next/link";
import PageNavItem from "./PageNavItem";

type Props = {
  path: string;
};

export default async function PageNav({ path }: Props) {
  const posts = await getPosts();
  const curr = posts.findIndex((post) => post.path === path);
  const prev = curr !== 0 ? curr - 1 : null;
  const next = curr !== posts.length - 1 ? curr + 1 : null;

  return (
    <div
      className={`grid ${
        prev === null || next === null ? "" : "grid-cols-2"
      } place-items-center text-center h-48 bg-gradient-to-r from-slate-100 to-slate-400 relative rounded-bl-xl rounded-br-xl`}
    >
      {prev !== null && (
        <Link href={`/posts/${posts[prev].path}`}>
          <FaArrowLeft className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 text-4xl" />
          <PageNavItem
            title={posts[prev].title}
            description={posts[prev].description}
          />
        </Link>
      )}
      {next !== null && (
        <Link href={`/posts/${posts[next].path}`}>
          <FaArrowRight className="absolute top-1/2 right-10  transform -translate-x-1/2 -translate-y-1/2 text-4xl" />
          <PageNavItem
            title={posts[next].title}
            description={posts[next].description}
          />
        </Link>
      )}
    </div>
  );
}
