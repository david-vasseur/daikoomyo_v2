import { getPost } from "@/lib/pages/blog";
import type { MetadataRoute } from "next";

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const slugs = await getPost();

    return [
        {
            url: "/",
            priority: 1,
            changeFrequency: "monthly" as const
        },
        {
            url: "/eft",
            priority: 0.9,
            changeFrequency: "monthly" as const
        },
        {
            url: "/fleurs-de-bach",
            priority: 0.9,
            changeFrequency: "monthly" as const
        },
        {
            url: "/soin-energetique",
            priority: 0.9,
            changeFrequency: "monthly" as const
        },
        {
            url: "/blog",
            priority: 0.9,
            changeFrequency: "weekly" as const
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