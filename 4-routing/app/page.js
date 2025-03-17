import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/hakkimizda">Hakkimizda</Link>
      <br />
      <Link
        href={{
          pathname: "/hakkimizda",
          query: {
            name: "serhat",
            surname: "ece",
          },
        }}
      >
        Hakkimizda Obje ile
      </Link>
    </div>
  );
}
