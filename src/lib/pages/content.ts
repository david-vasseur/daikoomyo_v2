"use server"

import IContent from "@/types/page";
import { prisma } from "../prisma/prismaClient";


export const getContentByName = async (name: string) => {
    const pagecontent = await prisma.page.findFirst({
        where: { name: name }
    })

    if (!pagecontent) {
        throw new Error(`Page not found for name: ${name}`);
    }

    return pagecontent as IContent;
}