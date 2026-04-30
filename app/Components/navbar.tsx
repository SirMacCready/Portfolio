import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-100 text-black p-4 mb-4">
      <div className="max-w-7xl mx-auto flex justify-start gap-6">
        <Link className="hover:text-amber-500" href="/">
          Accueil
        </Link>
        <Link className="hover:text-amber-500" href="/about">
          À propos
        </Link>
      </div>
    </nav>
  );
}
