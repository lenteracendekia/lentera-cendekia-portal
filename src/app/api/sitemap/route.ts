import { CONTENT } from "@/constants/content";
import { NextResponse } from "next/server";

export async function GET() {
  const BASE_URL = process.env.BASE_URL || "https://lenteracendekia.id";

  const siteMap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${BASE_URL}</loc>
      <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
    ${CONTENT.testimonials
      .map(
        (testimonial) => `
      <url>
        <loc>${BASE_URL}/testimonials/${testimonial.name.split(" ").join("-").toLowerCase()}</loc>
        <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new NextResponse(siteMap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
