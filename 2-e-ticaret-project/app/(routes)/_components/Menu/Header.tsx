"use client";

import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { Heart, Link, Search, UserIcon } from "lucide-react";
import { Pacifico } from "next/font/google";
import { useState } from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "./Cart";
import { useRouter } from "next/navigation";

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });

const Header = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <div className="mx-auto bgone shadow-md">
      <div className="container flex flex-row items-center justify-between p-5">
        <div>
          <h2 className={`${pacifiko.className} text-2xl`}>ECommerce</h2>
        </div>
        <div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
          <Input
            className="w-full border-2"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            onClick={handleSearch}
            variant={"link"}
            className="absolute right-1"
          >
            <Search />
          </Button>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <ModeToggle />

          <Link href="/fav">
            <Heart size={30} />
          </Link>

          <CartMenu />

          <Link href="/login">
            <UserIcon size={30} />
          </Link>

          <MobileMenu />
        </div>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;
