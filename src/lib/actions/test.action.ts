"use server"

import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

interface ITest {
    title: string;
    slug: string;
    excerpt: string;
    article: string[];
    date: Date;
    image: string;
    category: string;
    like: number;
    dislike: number;
}

export const testMongo = async ({ title, slug, excerpt, article, date, image, category, like, dislike }: ITest) => {

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