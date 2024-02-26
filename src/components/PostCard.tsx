import Image from "next/image";
import Link from "next/link";

export type Card = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
};

export default function PostCard({
  title,
  description,
  date,
  category,
  path,
}: Card) {
  return (
    <Link href={`/posts/${path}`}>
      <li className="text-center shadow-md rounded-md hover:scale-105 transition-all">
        <Image
          className="mx-auto rounded-ss-md rounded-se-md"
          src={`/images/posts/${path}.png`}
          alt="thumbnail"
          width={500}
          height={300}
        />
        <div className="p-4">
          <span className="text-xs text-gray-600">{date}</span>
          <h3 className="font-bold line-clamp-1">{title}</h3>
          <p className="text-sm line-clamp-1">{description}</p>
          <span className="inline-block mt-1 text-sm bg-green-100 px-1 rounded-md">
            {category}
          </span>
        </div>
      </li>
    </Link>
  );
}
