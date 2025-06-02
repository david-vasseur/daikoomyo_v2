"use client"

import React from 'react';
import { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./dateCustom.css"
import IContent from '@/types/page';
import { fr } from 'date-fns/locale/fr';
import { ServiceForm } from '../form/ServiceForm';
registerLocale('fr', fr)



function FormReservation({ content }: { content: IContent }) {
    



    return (
        <section id="contact" className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-4xl font-serif text-center font-semibold text-gray-800 mb-16">
                        Réservez votre <span className="text-purple-600">Séance</span>
                    </h2>
                    <ServiceForm content={content} />
                </div>
            </div>
        </section>
    )
}

export default FormReservation