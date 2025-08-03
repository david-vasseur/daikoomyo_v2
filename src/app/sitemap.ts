import { getPost } from "@/lib/pages/blog";
import type { MetadataRoute } from "next";

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const slugs = await getPost();

    return [
        {
            url: "/",
            priority: 1,
        },
        ...slugs.map((slug) => {
            return {
                url: `/blog/${slug.slug}`,
                priority: 0.8,
                changeFrequency: "weekly" as const,
            }
        })
    ].map((route: MetadataRoute.Sitemap[number]) => ({
        ...route,
        url: "https://www.daikoomyo.fr" + route.url,
    }))
}