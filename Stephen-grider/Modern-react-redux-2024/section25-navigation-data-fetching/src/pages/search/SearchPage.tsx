import React from "react";
import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";

const SearchPage = () => {
  const data = useLoaderData() as SearchLoaderResult;
  console.log(data);
  return <div>SearchPage</div>;
};

export default SearchPage;
