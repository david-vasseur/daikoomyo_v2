import React from 'react';
import FormReservation from '@/components/features/page - service/FormReservation';
import Price from '@/components/features/page - service/Price';
import Benefit from '@/components/features/page - service/Benefit';
import Infos from '@/components/features/page - service/Infos';
import { getContentByName } from '@/lib/pages/content';

export const metadata = {
    title: "EFT à Nîmes - Libérez vos émotions avec Daikoomyo",
    description: "Découvrez l’EFT à Nîmes pour apaiser vos émotions, réduire le stress et retrouver l’équilibre émotionnel. Séances personnalisées avec Daikoomyo.",
    openGraph: {
        title: "EFT à Nîmes - Libérez vos émotions avec Daikoomyo",
        description: "Séances d’EFT à Nîmes pour gérer le stress, les émotions et les blocages. Approche douce et personnalisée avec Daikoomyo.",
        url: "https://www.daikoomyo.fr/eft",
        siteName: "Daikoomyo",
        locale: "fr_FR",
        type: "website",
        images: [
        {
            url: "https://www.daikoomyo.fr/new_logo.webp",
            width: 1200,
            height: 630,
            alt: "EFT à Nîmes - Daikoomyo",
        },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "EFT à Nîmes - Daikoomyo",
        description: "Séances d’EFT à Nîmes pour libérer les blocages émotionnels. Approche bienveillante avec Daikoomyo.",
        images: ["https://www.daikoomyo.fr/new_logo.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};


const Page = async () => {

    const content = await getContentByName("eft");

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
                        backgroundImage: "url('https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                        backgroundAttachment: "fixed"
                        }}
                    />
                    <div className="absolute inset-0 bg-purple-900/70" />
                </div>

                <div className="container mx-auto px-4 py-20 z-10 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            Transformez votre vie avec le tapping EFT
                        </h1>
                        <p className="text-xl mb-8 text-purple-100 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Libérez les blocages émotionnels, réduisez l&apos;anxiété et atteignez la liberté émotionnelle grâce à la technique de libération émotionnelle (EFT).
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
    );
}

export default Page;
