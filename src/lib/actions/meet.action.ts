"use server"

import { prisma } from "../prisma/prismaClient";
import { TServiceSchema } from "../schema";

export const newMeet = async (value: TServiceSchema) => {

    const nom = value.fullName;
	const téléphone = value.phone;
	const email = value.email;
    const address = value.address;
	const soin = value.service;
	const formule = value.package;
	const message = value.message;
	const date_start = value.date_start;
	const date_end = value.date_end;

    try {
        if (nom !== null && téléphone !== null && email !== null && address !== null && soin !== null && formule !== null && message !== null && date_start !== null && date_end !== null) {
            await prisma.meet.create({
                data: {
                    name: String(nom),
                    email: String(email),
                    address: String(address),
                    phone: String(téléphone),
                    service: String(soin),
                    option: String(formule),
                    message: String(message),
                    dateStart: new Date(String(date_start)),
                    dateEnd: new Date(String(date_end))
                }
            })
        }    
        return true;
    } catch (error) {
        console.log(error);
        return false
    }   
}