"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="text-sm text-center flex flex-col p-4">
      <div>
        <Button
          variant={"link"}
          onClick={() => router.push("/")}
          className="text-sm"
          size={"sm"}
        >
          All right Reserved E-Commerce Website
        </Button>
      </div>

      <div>
        <Link
          href={`https://www.youtube.com/watch?v=FsDrcU1RF_g&list=PLaZoPjR0BnOEAzSEnT_OxJHlnzpmqUJ8c&index=8`}
          target="_blank"
        >
          Copyright @ 2023
        </Link>
      </div>
    </div>
  );
};

export default Footer;
