import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/config";

const today = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/results`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
