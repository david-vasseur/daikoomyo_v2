"use server"

import { prisma } from "../prisma/prismaClient";


export const getEmails = async () => {
    const emails = await prisma.newsletter.findMany()

    if (!emails) {
        const message = "Pas de clients abonnés"
        return {success: false,  message};
    }

    return {success: true,  emails};
}
