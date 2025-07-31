"use server"

import { prisma } from "@/lib/prisma/prismaClient";
import { randomUUID } from "crypto";


export const newUser = async ({ email }: { email: string } ) => {
    

    try {
        const existingEmail = await prisma.newsletter.findFirst({
            where: {email}
        })

        if (existingEmail) {
            const message = "Cet email est deja inscrit";
            return { success: false, message };
        } else {
            await prisma.newsletter.create({
                data: {
                    email,
                    token: `${randomUUID()}`,
                    date: new Date()
                }
            })
            const message = "Email enegistré en newsletter";
            return { success: true, message };
        }

    } catch (error) {
        console.log(error);
        return { success: false, message: "Une erreur est survenue." };
    }
}