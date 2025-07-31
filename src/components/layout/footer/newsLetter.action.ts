"use server"

import { prisma } from "@/lib/prisma/prismaClient";
import { randomUUID } from "crypto";


export const newUser = async ({ email }: { email: string } ) => {
    

    try {
        const existingEmail = await prisma.newsletter.findFirst({
            where: {email}
        })

        if (existingEmail) {
            const message = "Cette adresse email est déjà inscrite à la newsletter.";
            return { success: false, message };
        } else {
            await prisma.newsletter.create({
                data: {
                    email,
                    token: `${randomUUID()}`,
                    date: new Date()
                }
            })
            const message = "Merci ! Votre inscription à la newsletter a bien été prise en compte.";
            return { success: true, message };
        }

    } catch (error) {
        console.log(error);
        return { success: false, message: "Une erreur est survenue. Veuillez réessayer plus tard." };
    }
}