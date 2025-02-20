import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/contact">Contact</Link>
      <Link href="/faq">Faq</Link>
    </div>
  );
}
