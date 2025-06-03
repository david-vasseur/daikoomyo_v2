"use client"

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { HomeForm } from '../form/HomeForm';

const Contact: React.FC = () => {

	return (
		<section id="contact" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
						Me <span className="text-purple-600">Contacter</span>
					</h2>
					<div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
					<p className="text-gray-600 font-semibold">
						Contactez-moi pour me poser vos questions sur votre cheminement spirituel
					</p>
				</div>
				
				<div className="max-w-6xl mx-auto">
					<div className="bg-white rounded-xl shadow-lg overflow-hidden">
						<div className="flex flex-col md:flex-row">
							<div className="md:w-2/5 bg-gradient-to-br from-purple-400 to-indigo-900 text-white p-8 md:p-12">
								<h3 className="text-2xl font-semibold mb-6">Informations</h3>
								
								<div className="space-y-6 mb-8">
									<div className="flex items-start">
										<div className="mr-4">
											<Mail className="h-6 w-6" />
										</div>
										<div>
											<p className="font-semibold">Email</p>
											<p>contact@daikoomyo.fr</p>
										</div>
									</div>
									
									<div className="flex items-start">
										<div className="mr-4">
											<Phone className="h-6 w-6" />
										</div>
										<div>
											<p className="font-semibold">Téléphone</p>
											<p>06 18 65 95 10</p>
										</div>
									</div>
									
									<div className="flex items-start">
										<div className="mr-4">
											<MapPin className="h-6 w-6" />
										</div>
										<div>
											<p className="font-semibold">Adresse</p>
											<p>30390 Estezargues</p>
										</div>
									</div>
									
									<div className="flex items-start">
										<div className="mr-4">
											<Clock className="h-6 w-6" />
										</div>
										<div>
											<p className="font-semibold">Horaires</p>
											<p>Lundi - Vendredi: 16h30 - 20h00</p>
											<p>Samedi: 10h00 - 18h00</p>
										</div>
									</div>
								</div>
								
								<div className="mt-12">
									<h4 className="text-xl font-semibold mb-4">Suivez Moi</h4>
									<div className="flex space-x-4">
										<a href="https://www.instagram.com/camille_energeticienne?igsh=em0yeWlvbmwyeGh4&utm_-soucre=qr" target="_blank" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
											<span className="sr-only">Instagram</span>
											<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
										</a>
										<a href="https://www.facebook.com/share/18wR7MdAoX/?mibextid=wwwXlfr" target="_blank" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
											<span className="sr-only">Facebook</span>
											<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
										</a>
									</div>
								</div>
							</div>
							
							<div className="md:w-3/5 p-8 md:p-12">
								<h3 className="text-2xl font-semibold text-gray-800 mb-6">Demande de renseignements</h3>
								<HomeForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;