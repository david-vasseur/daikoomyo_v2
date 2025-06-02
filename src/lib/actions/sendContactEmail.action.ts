'use server';

import nodemailer from 'nodemailer';
import { THomeSchema } from '../schema';

export async function sendContactEmail(value: THomeSchema) {
    const nom = value.fullName;
    const téléphone = value.phone;
    const email = value.email;
    const soin = value.service;
    const message = value.message;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER!,
            pass: process.env.EMAIL_PASSWORD!,
        },
    });

    const mailOptions = {
        from: `"www.daikoomyo.fr" <${process.env.EMAIL_USER}>`,
        to: 'contact@daikoomyo.fr',
        subject: 'Daikoomyo - Nouvelle demande de renseignement',
        text: `
            Voici les détails du formulaire :

            Nom: ${nom}
            Téléphone: ${téléphone}
            E-mail: ${email}
            Type de soin: ${soin}
            Message: ${message}
        `,
        html: `
            <h1 style="color: pink; font-weight: bold">Nouvelle demande de rendez-vous</h1>
            <h2 style="color: green; font-weight: bold">${nom} a fait une demande de renseignement pour un soin ${soin} </h2>
            <h2 style="color: blue; font-weight: bold">Vous pouvez la joindre via:</h2>
            <ul style="list-style: none; font-size: 20px">
                <li style="font-weight: bold">nom : ${nom}</li>
                <li style="font-weight: bold">téléphone: ${téléphone}</li>
                <li style="font-weight: bold">email: ${email}</li>
            </ul>
            <h2 style="color: orange; font-weight: bold">Message:</h2>
            <p style="font-size: 20px">${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Erreur email:', error);
        return { success: false };
    }
}