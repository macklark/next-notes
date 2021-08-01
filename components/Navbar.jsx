import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="flex gap-9">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
      </nav>
    </header>
  );
}
