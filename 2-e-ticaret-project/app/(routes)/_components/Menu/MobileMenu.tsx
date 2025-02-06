import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { components } from "@/constans";

const MobileMenu = () => {
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col mt-8 space-y-6">
            {components.map((component) => (
              <Link key={component.title} href={component.href}>
                {component.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
