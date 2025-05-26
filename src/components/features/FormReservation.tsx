"use client"

import React from 'react';
import reservation from "../../data/formData";
import { usePathname } from 'next/navigation';

function FormReservation() {

    const router = usePathname();

    const pathName = router.replace(/^\/+/, '');

    const resa = reservation.find(res => res.name === pathName);

  

    return (
        <section id="contact" className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-serif text-center font-semibold text-gray-800 mb-16">
                        Réservez votre <span className="text-purple-600">Séance</span>
                    </h2>
                    <form className="bg-white rounded-xl shadow-lg p-8">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Nom/Prénom
                                </label>
                                <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Adresse e-mail
                                </label>
                                <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                required
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Numéro de téléphone
                                </label>
                                <input
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                                Choisir une offre
                                </label>
                                <select
                                    id="package"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    required
                                    >
                                        {resa?.options.map((op, index) => {
                                            return (
                                                <option key={index} value={index}>{op}</option>
                                            )
                                            
                                        })}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Notes supplémentaires
                                </label>
                                <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
                            >
                                Planifier la séance
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormReservation