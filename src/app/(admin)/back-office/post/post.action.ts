"use server"

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();


export const createPost = async ( formData : FormData ) => {

    const title = formData.get('title') as string;
    const slug = formData.get('slug') as string;
    const excerpt = formData.get('excerpt') as string;
    const articleString = formData.get('article') as string;
    const image = formData.get('image') as string;
    const category = formData.get('category') as string;

    let article;

    try {
        article = JSON.parse(articleString);
    } catch (error) {
        throw new Error('erreur dans le fichier article');
    }

    if (!title || !slug || !excerpt || !article || !image || !category) {
        throw new Error("Un champs requis est manquant");
    } else {
        await prisma.post.create({
            data: {
                title,
                slug,
                excerpt,
                article,
                date: new Date(),
                image,
                category,
                like: 0,
                dislike: 0,
            },
        });
    }  
}