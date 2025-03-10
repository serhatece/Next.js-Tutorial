import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/contact">Contact</Link>
      <br />
      <Link href="/faq">Faq</Link>
      <br />
      <Link href="/products">Products</Link>
    </div>
  );
}
