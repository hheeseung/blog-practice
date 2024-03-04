"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex justify-between items-center p-2">
      <h1 className="text-3xl font-bold">
        <Link href="/">My Devlog</Link>
      </h1>
      <ul className="flex items-center space-x-3">
        <Link href="/">
          <li className={`${pathname === "/" && "border-b-2 border-sky-500"}`}>
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`${
              pathname === "/about" && "border-b-2 border-sky-500"
            }`}
          >
            About
          </li>
        </Link>
        <Link href="/posts">
          <li
            className={`${
              pathname === "/posts" && "border-b-2 border-sky-500"
            }`}
          >
            Posts
          </li>
        </Link>
        <Link href="/contact">
          <li
            className={`${
              pathname === "/contact" && "border-b-2 border-sky-500"
            }`}
          >
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
}
