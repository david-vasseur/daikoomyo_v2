"use server"

import { PrismaClient } from "@/generated/prisma";
import { IPost } from "@/types/post";

const prisma = new PrismaClient();


export const testMongo = async ({ title, slug, excerpt, article, date, image, category, like, dislike }: IPost) => {

    await prisma.post.create({
        data: {
            title,
            slug,
            excerpt,
            article,
            date,
            image,
            category,
            like,
            dislike,
        },
    });
}