"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const AlertDialogExample = () => {
  const handleBildirim = () => {
    alert("Bildirimler Açıldı.");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"greenBtn"}>
          <Bell />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Bildirimler </AlertDialogTitle>
          <AlertDialogDescription>
            Bildirimleri Açmak İstiyor musunuz
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleBildirim}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogExample;
