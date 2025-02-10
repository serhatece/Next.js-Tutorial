"use client";

import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  return <div>{searchParams.get("query")}</div>;
};

export default SearchPage;
