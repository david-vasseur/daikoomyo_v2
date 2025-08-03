"use server"

import { PrismaClient } from "@/generated/prisma";
import { TBlogPostSchema } from "@/lib/schema";

const prisma = new PrismaClient();


export const createPost = async ( { value }: { value: TBlogPostSchema } ) => {

    let article;

    try {

        article = JSON.parse(value.article);

    } catch (error) {

        console.error(error);
        return { success: false, message: 'erreur dans le fichier article' };
    }

    if (!value.title || !value.slug || !value.excerpt || !value.article || !value.image || !value.category) {

        return { success: false, message: "Un champs requis est manquant" };

    } else {

        await prisma.post.create({
            data: {
                title: value.title,
                slug: value.slug,
                excerpt: value.excerpt,
                article,
                date: new Date(),
                image: value.image,
                category: value.category,
                like: 0,
                dislike: 0,
            },
        });


        if (process.env.NODE_ENV === "production") {
            try {
                await fetch("https://www.google.com/ping?sitemap=https://www.daikoomyo.fr/sitemap.xml");
                await fetch("https://www.bing.com/ping?sitemap=https://www.daikoomyo.fr/sitemap.xml");
            } catch (error) {
                console.warn("Erreur lors du ping des moteurs de recherche :", error);
            }
        }

        return { success: true, message: "Votre article a bien été publié" }
    }  
}