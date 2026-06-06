import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: "2025-06-06",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/results`,
      lastModified: "2025-06-06",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: "2025-06-06",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: "2025-06-06",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
