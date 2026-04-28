import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" flex gap-6 p-6 bg-gray-800 text-white items-center justify-center ">
      <Link className="hover:text-amber-500" href="/">
        Home
      </Link>
      <Link className="hover:text-amber-500" href="/about">
        About
      </Link>
      <Link className="hover:text-amber-500" href="/projects">
        Projects
      </Link>
    </nav>
  );
}
