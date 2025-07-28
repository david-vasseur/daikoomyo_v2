"use server"

import { prisma } from "../prisma/prismaClient";
import { IPost } from "@/types/post";


export const getPost = async () => {
    const posts = await prisma.post.findMany()

    if (!posts) {
        throw new Error(`Pas de posts`);
    }

    return posts as IPost[];
}

export const getPostbySlug = async (slug: string) => {
    const article = await prisma.post.findUnique({
        where: { slug }
    })

    if (!article) {
        throw new Error("Article non trouvé");
    }

    return article as IPost;
}