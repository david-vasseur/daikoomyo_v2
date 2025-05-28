"use client"

import React, { useState } from 'react';
import { sendEmail } from '@/lib/actions/sendEmail.action';
import IContent from '@/types/page';

function FormReservation({ content }: { content: IContent }) {

    const [status, setStatus] = useState<null | 'success' | 'error'>(null)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;

        const formData = new FormData(form)
        
        const res = await sendEmail(formData)

        if (res.success) {
            setStatus('success')
            e.currentTarget.reset()
        } else {
            setStatus('error')
        }
    }
  

    return (
        <section id="contact" className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-serif text-center font-semibold text-gray-800 mb-16">
                        Réservez votre <span className="text-purple-600">Séance</span>
                    </h2>
                    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom/Prénom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="nom"
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
                                    name="email"
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
                                    name="téléphone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                />
                            </div>

                            <div>
                                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
                                    Choisir une offre
                                </label>
                                <select
                                    id="package"
                                    name="formule"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    required
                                    >
                                        {content?.options.map((op, index) => {
                                            return (
                                                <option key={index} value={op}>{op}</option>
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
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                ></textarea>
                            </div>

                            <div>
                                <input type="hidden" name="soin" value={content?.name} />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
                            >
                                Planifier la séance
                            </button>
                        </div>
                        {status === 'success' && <p className="p-2 rounded-lg bg-green-600">Message envoyé !</p>}
                        {status === 'error' && <p className="p-2 rounded-lg bg-red-600">Une erreur est survenue.</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormReservation