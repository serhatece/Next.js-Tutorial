import React from "react";
import { getData } from "./page";

async function Head() {
  const data = await getData();
  return <div>{data.title}</div>;
}

export default Head;
