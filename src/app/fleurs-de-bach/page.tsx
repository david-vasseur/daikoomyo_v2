import Benefits from '@/components/features/Benefits';
import FormReservation from '@/components/features/FormReservation';
import Infos from '@/components/features/Infos';
import Price from '@/components/features/Price';
import React from 'react'

function page() {
    return (
        <div className="font-sans">
            <section className="relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                            backgroundImage: "url('/bach1.jpg')",
                            backgroundAttachment: "fixed"
                        }}
                    />
                    <div className="absolute inset-0 bg-purple-900/70" />
                </div>

                <div className="container mx-auto px-4 py-20 z-10 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6">
                            Retrouver l&apos;équilibre émotionnel avec les fleurs de Bach
                        </h1>
                        <p className="text-xl mb-8 text-purple-100">
                            Explorez une méthode naturelle et douce pour harmoniser vos émotions et soutenir votre bien-être intérieur au quotidien.
                        </p>
                        <a 
                            href="#contact" 
                            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-colors shadow-lg text-lg"
                        >
                            Commencer mon accompagnement
                        </a>
                    </div>
                </div>
            </section>
            <Benefits />
            <Infos />
            <Price />
            <FormReservation />
        </div>
    )
}

export default page;