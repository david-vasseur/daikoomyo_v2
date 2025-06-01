"use client"

import React, { useState } from 'react';
import { sendEmail } from '@/lib/actions/sendEmail.action';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./dateCustom.css"
import IContent from '@/types/page';
import { setHours, setMinutes } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import { newMeet } from '@/lib/actions/meet.action';
registerLocale('fr', fr)



function FormReservation({ content }: { content: IContent }) {

    const [status, setStatus] = useState<null | 'success' | 'error'>(null)
    const [meet, setMeet] = useState<{start: Date | null, end: Date | null}>({
        start: null,
        end: null
    })
    console.log(meet);
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;

        const formData = new FormData(form);

        const success = await newMeet(formData);
        
        if(success) {
            const res = await sendEmail(formData);

            if (res.success) {
                setStatus('success')
                e.currentTarget.reset()
            } else {
                setStatus('error')
            }
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
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                    Adresse
                                </label>
                                <input
                                    type="address"
                                    id="address"
                                    name="adresse"
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

                            <DatePicker
                                locale="fr"
                                selected={meet.start}
                                onChange={(date) => {
                                    if (!date) {
                                        return
                                    }
                                    setMeet(prev => ({ ...prev, start: date, end: new Date(date.getTime() + 60 * 60000) }))}
                                }
                                showTimeSelect
                                timeCaption="Heure"
                                dateFormat="Pp"
                                placeholderText="Selectionner une date"
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent cursor-pointer"
                                minDate={new Date()}
                                minTime={meet.start?.getDay() !== 6 ? setHours(setMinutes(new Date(), 0), 16) : setHours(setMinutes(new Date(), 0), 9)}
                                maxTime={setHours(setMinutes(new Date(), 30), 19)}
                                filterDate={(date) => date.getDay() !== 0}
                            />

                            <input
                                type="hidden"
                                name="date_start"
                                value={meet.start ? meet.start.toISOString() : ""}
                            />
                            <input
                                type="hidden"
                                name="date_end"
                                value={meet.end ? meet.end.toISOString() : ""}
                            />

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