import Benefit from '@/components/features/page - service/Benefit';
import FormReservation from '@/components/features/page - service/FormReservation';
import Infos from '@/components/features/page - service/Infos';
import Price from '@/components/features/page - service/Price';
import { getContentByName } from '@/lib/pages/content';
import React from 'react';

export const metadata = {
    title: "Fleurs de Bach à Nîmes - Équilibrez vos émotions avec Daikoomyo",
    description: "Profitez des bienfaits des Fleurs de Bach à Nîmes pour retrouver harmonie, clarté émotionnelle et sérénité. Accompagnement personnalisé avec Daikoomyo.",
    openGraph: {
        title: "Fleurs de Bach à Nîmes - Équilibrez vos émotions avec Daikoomyo",
        description: "Consultations Fleurs de Bach à Nîmes pour un soutien émotionnel naturel. Retrouvez votre équilibre intérieur avec Daikoomyo.",
        url: "https://www.daikoomyo.fr/fleurs-de-bach",
        siteName: "Daikoomyo",
        locale: "fr_FR",
        type: "website",
        images: [
        {
            url: "https://www.daikoomyo.fr/new_logo.webp",
            width: 1200,
            height: 630,
            alt: "Fleurs de Bach à Nîmes - Daikoomyo",
        },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fleurs de Bach à Nîmes - Daikoomyo",
        description: "Soutien émotionnel naturel avec les Fleurs de Bach à Nîmes. Approche douce et personnalisée par Daikoomyo.",
        images: ["https://www.daikoomyo.fr/new_logo.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};


const Page = async () => {

    const content = await getContentByName("fleurs-de-bach");

    if (!content) {
        return (
            <div>
                <h2>Erreur de chargement</h2>
            </div>
        )
    }

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
                        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            Retrouver l&apos;équilibre émotionnel avec les fleurs de Bach
                        </h1>
                        <p className="text-xl mb-8 text-purple-100 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Explorez une méthode naturelle et douce pour harmoniser vos émotions et soutenir votre bien-être intérieur au quotidien.
                        </p>
                        <a 
                            href="#contact" 
                            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-colors shadow-lg text-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
                        >
                            Prendre RDV
                        </a>
                    </div>
                </div>
            </section>
            <Benefit content={content} />
            <Infos content={content} />
            <Price content={content} />
            <FormReservation content={content} />
        </div>
    )
}

export default Page;