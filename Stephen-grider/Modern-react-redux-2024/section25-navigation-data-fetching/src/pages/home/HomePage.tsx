import React from "react";
import { useLoaderData } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";
const HomePage = () => {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;
  return (
    <div>
      {featuredPackages.map((p) => {
        return <p key={p.name}>{p.name}</p>;
      })}
    </div>
  );
};

export default HomePage;
