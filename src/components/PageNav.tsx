import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import PageNavItem from "./PageNavItem";
import { PostData } from "@/service/posts";

export default async function PageNav({
  posts: { prev, next },
}: {
  posts: PostData;
}) {
  return (
    <div
      className={`grid ${
        prev === null || next === null ? "" : "grid-cols-2"
      } place-items-center text-center h-48 bg-gradient-to-r from-slate-100 to-slate-400 relative rounded-bl-xl rounded-br-xl`}
    >
      {prev !== null && (
        <Link href={`/posts/${prev.path}`}>
          <FaArrowLeft className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 text-4xl" />
          <PageNavItem title={prev.title} description={prev.description} />
        </Link>
      )}
      {next !== null && (
        <Link href={`/posts/${next.path}`}>
          <FaArrowRight className="absolute top-1/2 right-10  transform -translate-x-1/2 -translate-y-1/2 text-4xl" />
          <PageNavItem title={next.title} description={next.description} />
        </Link>
      )}
    </div>
  );
}
