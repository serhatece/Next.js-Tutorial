import { getData } from "./page";
import React from "react";
async function Head() {
  const data = await getData();
  return <div>{data.title}</div>;
}

export default Head;
