'use server';

import { TCreateNewsLetterSchema } from '@/lib/schema';
import nodemailer from 'nodemailer';

interface IEmail {
    id: string;
    email: string;
    token: string;
    date: Date;
}

export async function sendNewsletterEmail(value: TCreateNewsLetterSchema, emails: IEmail[]) {
    const title = value.title;
    const content = value.content;

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
        to: "contact@daikoomyo.fr",
        bcc: emails.map(e => e.email).join(','),
        subject: `${title}`,
        html: `${content}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: "Votre Newsletter a bien été envoyé" };
    } catch (error) {
        console.error('Erreur email:', error);
        return { success: false, message: "Votre Newsletter n'a pas été envoyé, une erreur est survenue" };
    }
}