"use client";
import React, { useEffect } from "react";
import Button from "./button";

function page() {
  const [message, setMessage] = React.useState("initial");
  useEffect(() => {
    setMessage("use effect manipule etti");
    console.log("useEffect");
  }, []);
  console.log("Page");
  return (
    <div>
      Page
      <Button />
      <p>{message}</p>
    </div>
  );
}

export default page;
