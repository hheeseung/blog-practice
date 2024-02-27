import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2">
      <h1 className="text-3xl font-bold">
        <Link href="/">My Devlog</Link>
      </h1>
      <ul className="flex items-center space-x-3">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/posts">
          <li>Posts</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
