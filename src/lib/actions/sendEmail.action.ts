'use server';

import nodemailer from 'nodemailer';
import { randomUUID } from 'crypto';
import { TServiceSchema } from '../schema';

export async function sendEmail(value: TServiceSchema) {
	const nom = value.fullName;
	const téléphone = value.phone;
	const address = value.address;
	const email = value.email;
	const soin = value.service;
	const formule = value.package;
	const message = value.message;
	const date_start = value.date_start;
	const date_end = value.date_end;

	function formatDateToICS(isoDate: string): string {
		const d = new Date(isoDate);
		return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
	}

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER!,
			pass: process.env.EMAIL_PASSWORD!,
		},
	});

	const uid = `${randomUUID()}@daikoomyo.fr`;

	const icsContent = [
		'BEGIN:VCALENDAR',
		'VERSION:2.0',
		'PRODID:-//Daikoomyo//RDV//FR',
		'METHOD:REQUEST',
		'BEGIN:VEVENT',
		`UID:${uid}`,
		`DTSTAMP:${formatDateToICS(new Date().toISOString())}`,
		`DTSTART:${formatDateToICS(date_start?.toString() || '')}`,
		`DTEND:${formatDateToICS(date_end?.toString() || '')}`,
		`SUMMARY:Rendez-vous avec ${nom}`,
		`DESCRIPTION:Soin ${soin} avec la formule ${formule}`,
		'LOCATION:Domicile du client',
		'STATUS:CONFIRMED',
		'SEQUENCE:0',
		'ORGANIZER;CN=Daikoomyo:MAILTO:contact@daikoomyo.fr',
		'ATTENDEE;CN=Camille;RSVP=TRUE:MAILTO:camille.b.35@hotmail.fr',
		'END:VEVENT',
		'END:VCALENDAR'
	].join('\r\n'); 

	const mailOptions = {
		from: `"www.daikoomyo.fr" <${process.env.EMAIL_USER}>`,
		to: 'contact@daikoomyo.fr',
		subject: 'Daikoomyo - Nouvelle demande de rendez-vous',
		text: `
			Voici les détails du formulaire :

			Nom: ${nom}
			Téléphone: ${téléphone}
			Adresse: ${address}
			E-mail: ${email}
			Type de soin: ${soin}
			Message: ${message}
			Formule: ${formule}
					`,
					html: `
			<h1 style="color: pink; font-weight: bold">Nouvelle demande de rendez-vous</h1>
			<h2 style="color: green; font-weight: bold">${nom} a fait une demande de rendez-vous pour un soin ${soin} avec la formule ${formule} le ${date_start} à ${address}</h2>
			<h2 style="color: blue; font-weight: bold">Vous pouvez la joindre via:</h2>
			<ul style="list-style: none; font-size: 20px">
				<li style="font-weight: bold">nom : ${nom}</li>
				<li style="font-weight: bold">téléphone: ${téléphone}</li>
				<li style="font-weight: bold">email: ${email}</li>
			</ul>
			<h2 style="color: orange; font-weight: bold">Message:</h2>
			<p style="font-size: 20px">${message}</p>
		`,
		alternatives: [{
			contentType: 'text/calendar; charset=UTF-8; method=REQUEST',
			content: icsContent,
		}],
		attachments: [
			{
				filename: 'rendezvous.ics',
				content: icsContent,
				contentType: 'text/calendar; charset=UTF-8; method=REQUEST',
				contentDisposition: 'attachment' as const
			}
		],
		headers: {
			'Content-Class': 'urn:content-classes:calendarmessage'
		}
	};

	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error('Erreur email:', error);
		return { success: false };
	}
}
