"use server"

import { prisma } from "../prisma/prismaClient";

export const newMeet = async (formData: FormData) => {

    const nom = formData.get('nom');
	const téléphone = formData.get('téléphone');
	const email = formData.get('email');
    const address = formData.get('adresse');
	const soin = formData.get('soin');
	const formule = formData.get('formule');
	const message = formData.get('message');
	const date_start = formData.get('date_start');
	const date_end = formData.get('date_end');

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