import React from 'react';
import FormReservation from '@/components/features/FormReservation';
import Price from '@/components/features/Price';
import Benefits from '@/components/features/Benefits';
import Infos from '@/components/features/Infos';

function Page() {
    return (
        <div className="font-sans">
            <section className="relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                        backgroundImage: "url('/reiki1.PNG')",
                        backgroundAttachment: "fixed"
                        }}
                    />
                    <div className="absolute inset-0 bg-purple-900/70" />
                </div>

                <div className="container mx-auto px-4 py-20 z-10 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6">
                            Découvrez le pouvoir guérisseur du Reiki
                        </h1>
                        <p className="text-xl mb-8 text-purple-100">
                            Rétablissez l&apos;équilibre, réduisez le stress et favorisez la guérison naturelle grâce à la douce puissance de l&apos;énergie universelle de vie.
                        </p>
                        <a 
                        href="#contact" 
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-colors shadow-lg text-lg"
                        >
                        Prendre RDV
                        </a>
                    </div>
                </div>
            </section>
            <Benefits />
            <Infos />
            <Price />
            <FormReservation />
        </div>
    );
}

export default Page;