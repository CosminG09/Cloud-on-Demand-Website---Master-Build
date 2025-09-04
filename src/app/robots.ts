import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
    sitemap: "https://www.example.com/sitemap.xml", // placeholder; update at launch
  };
}
