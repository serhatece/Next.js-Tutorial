import { ModeToggle } from "@/components/ModeToggle";
import { Input } from "@/components/ui/input";
import { Heart, Search, UserIcon } from "lucide-react";
import { Pacifico } from "next/font/google";
import React from "react";
import NavMenu from "./NavMenu";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import CartMenu from "./Cart";

const pacifiko = Pacifico({ subsets: ["cyrillic"], weight: "400" });

const Header = () => {
  return (
    <div className="mx-auto bgone shadow-md">
      <div className="container flex flex-row items-center justify-between p-5">
        <div>
          <h2 className={`${pacifiko.className} text-2xl`}>ECommerce</h2>
        </div>
        <div className="hidden md:flex relative md:min-w-96 lg:w-1/2">
          <Input className="w-full border-2" />
          <Button variant={"link"} className="absolute right-1">
            <Search />
          </Button>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <ModeToggle />
          <Heart size={30} />
          <CartMenu />
          <UserIcon size={30} />
          <MobileMenu />
        </div>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;
