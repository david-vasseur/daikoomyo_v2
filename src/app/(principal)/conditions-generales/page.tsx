import React from 'react'

function page() {
    return (
        <div className="font-sans">
            <section className="relative min-h-screen flex items-center">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('')",
                            backgroundAttachment: "fixed"
                        }}
                    />
                    <div className="absolute inset-0 bg-purple-900/70" />
                </div>

                <div className="container mx-auto px-4 py-20 z-10 text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-tight mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                            Conditions d&apos;utilisation
                        </h1>
                        <p className="text-xl mb-8 text-purple-100 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Les règles encadrant l&apos;utilisation du site Daikoomyo et les services proposés.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-colors shadow-lg text-lg opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-5 py-10 px-5 bg-gray-100">
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">1. Objet</h2>
                    <p className="font-medium mt-2">
                        Les présentes conditions ont pour objet de définir les modalités d&apos;utilisation du site https://www.daikoomyo.fr, propriété de Camille Boucher, et des services qui y sont proposés.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">2. Acceptation</h2>
                    <p className="font-medium mt-2">
                        En accédant au site et en utilisant ses services, l&apos;utilisateur accepte pleinement et entièrement les présentes conditions d&apos;utilisation.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">3. Accès au site</h2>
                    <p className="font-medium mt-2">
                        Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet. Les frais liés à l&apos;accès (connexion, matériel, etc.) sont à la charge de l&apos;utilisateur.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">4. Contenu et propriété intellectuelle</h2>
                    <p className="font-medium mt-2">
                        Tous les contenus du site (textes, images, vidéos, logo, etc.) sont protégés par le droit d&apos;auteur. Toute reproduction ou représentation totale ou partielle sans autorisation est interdite.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">5. Comportement de l&apos;utilisateur</h2>
                    <p className="font-medium mt-2">
                        L&apos;utilisateur s&apos;engage à ne pas :<br/>
                        - Utiliser le site à des fins illicites ou contraires aux bonnes mœurs<br/>
                        - Détourner les formulaires à d&apos;autres fins que celles prévues (prise de rendez-vous, contact)<br/>
                        - Publier de faux avis ou commentaires diffamatoires
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">6. Avis clients</h2>
                    <p className="font-medium mt-2">
                        Les avis publiés sur le site doivent être sincères et respectueux. Daikoomyo se réserve le droit de modérer ou supprimer tout contenu non conforme.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">7. Responsabilité</h2>
                    <p className="font-medium mt-2">
                        Daikoomyo ne saurait être tenu responsable des dommages directs ou indirects liés à l&apos;utilisation du site. Les contenus proposés, notamment sur le blog, sont à visée informative et ne remplacent en aucun cas un avis médical.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">8. Disponibilité du service</h2>
                    <p className="font-medium mt-2">
                        Le site est normalement accessible 24h/24. Toutefois, Camille Boucher se réserve le droit d&apos;interrompre l&apos;accès pour maintenance ou tout autre motif sans préavis.
                    </p>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-purple-500">9. Droit applicable</h2>
                    <p className="font-medium mt-2">
                        Les présentes conditions sont régies par le droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social du responsable du site.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default page;