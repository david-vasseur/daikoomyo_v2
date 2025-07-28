import React from 'react';
import FormReservation from '@/components/features/page - service/FormReservation';
import Price from '@/components/features/page - service/Price';
import Benefit from '@/components/features/page - service/Benefit';
import Infos from '@/components/features/page - service/Infos';
import { getContentByName } from '@/lib/pages/content';
import Script from 'next/script';

export const metadata = {
    title: "Soin énergétique à Nîmes - Daikoomyo",
    description: "Retrouvez équilibre et sérénité grâce au soin énergétique à Nîmes proposé par Daikoomyo. Séances personnalisées pour votre bien-être.",
    openGraph: {
        title: "Soin énergétique à Nîmes - Daikoomyo",
        description: "Séances de soin énergétique à Nîmes. Harmonisez vos énergies et améliorez votre bien-être avec Daikoomyo.",
        url: "https://www.daikoomyo.fr/soin-energetique",
        siteName: "Daikoomyo",
        locale: "fr_FR",
        type: "website",
        images: [
            {
                url: "https://www.daikoomyo.fr/new_logo.webp",
                width: 1200,
                height: 630,
                alt: "Soin énergétique à Nîmes - Daikoomyo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Soin énergétique à Nîmes - Daikoomyo",
        description: "Séances de soin énergétique à Nîmes avec Daikoomyo.",
        images: ["https://www.daikoomyo.fr/new_logo.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};



const Page = async () => {

    const content = await getContentByName("soin-energetique");

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
                        backgroundImage: "url('/reiki1.PNG')",
                        backgroundAttachment: "fixed"
                        }}
                    />
                    <div className="absolute inset-0 bg-purple-900/70" />
                </div>

                <div className="container mx-auto px-4 py-20 z-10 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            Découvrez le pouvoir guérisseur du Reiki
                        </h1>
                        <p className="text-xl mb-8 text-purple-100 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Rétablissez l&apos;équilibre, réduisez le stress et favorisez la guérison naturelle grâce à la douce puissance de l&apos;énergie universelle de vie.
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
            {/* Balise JSON-LD SEO */}
            <Script
                id="structured-data-localbusiness"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Daikoomyo",
                        "image": "https://www.daikoomyo.fr/new_logo.webp",
                        "description": "Séances de soin énergétique à Nîmes",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Nîmes",
                            "addressCountry": "FR"
                        },
                        "url": "https://www.daikoomyo.fr/soin-energetique"
                    }),
                }}
            />
        </div>
    );
}

export default Page;