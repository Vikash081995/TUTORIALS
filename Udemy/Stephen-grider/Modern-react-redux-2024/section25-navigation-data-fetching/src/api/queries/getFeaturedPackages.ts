import { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES = ["react", "typescript", "esbuild", "vite"];

export async function getFeaturedPackages() {
  const promises = FEATURED_PACKAGES.map(async (name) => {
    const response = await fetch(`https://registry.npmjs.org/${name}`);
    return response.json();
  });

  const data = await Promise.all(promises);
  return data as PackageDetails[];
}
