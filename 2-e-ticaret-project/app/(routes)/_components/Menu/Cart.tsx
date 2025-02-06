import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";

const CartMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <ShoppingBagIcon size={30} />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col mt-8 space-y-6">Empty Cart</div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CartMenu;
