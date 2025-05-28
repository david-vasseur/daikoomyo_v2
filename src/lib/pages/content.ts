"use server"

import { PrismaClient } from "@/generated/prisma";
import IContent from "@/types/page";

const prisma = new PrismaClient();


export const getContentByName = async (name: string) => {
    const pagecontent = await prisma.page.findFirst({
        where: { name: name }
    })

    if (!pagecontent) {
        throw new Error(`Page not found for name: ${name}`);
    }

    return pagecontent as IContent;
}