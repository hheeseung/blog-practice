"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BORDER = "border-b-2 border-sky-500";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-2">
      <h1 className="text-3xl font-bold">
        <Link href="/">My Devlog</Link>
      </h1>
      <ul className="flex items-center space-x-3">
        <Link href="/">
          <li className={`${pathname === "/" && BORDER}`}>Home</li>
        </Link>
        <Link href="/about">
          <li className={`${pathname === "/about" && BORDER}`}>About</li>
        </Link>
        <Link href="/posts">
          <li className={`${pathname === "/posts" && BORDER}`}>Posts</li>
        </Link>
        <Link href="/contact">
          <li className={`${pathname === "/contact" && BORDER}`}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
