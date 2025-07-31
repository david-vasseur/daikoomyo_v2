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
                            Politique de confidentialité
                        </h1>
                        <p className="text-xl mb-8 text-purple-100 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                            Retrouvez en détail notre politique de confidentialité et le traitement afférant à vos données.
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
                    <h2 className="font-bold text-3xl text-purple-500">1. Préambule</h2>
                    <p className="font-medium mt-2">La présente politique de confidentialité a pour but d&apos;informer les utilisateurs du site Daikoomyo (accessible à l&apos;adresse : https://www.daikoomyo.fr) de la manière dont sont collectées, utilisées et protégées leurs données personnelles.<br/>
                        En naviguant sur ce site, vous acceptez les termes de la présente politique.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">2. Responsable du traitement</h2>
                    <p className="font-medium mt-2">Le responsable du traitement est : <br/>
                        <br/>
                        nom: Camille Boucher <br/>
                        Adresse : 58, chemin des grands fonts 30390 Estezargues <br/>
                        Email : contact@daikoomyo.fr
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">3. Données collectées</h2>
                    <p className="font-medium mt-2">Nous pouvons collecter les données suivantes lors de votre navigation : <br/>
                        <br/>
                        Adresse IP (à des fins statistiques/analytiques) <br/>
                        Données de navigation (pages visitées, temps passé) <br/>
                        Données transmises volontairement via formulaire de contact : nom, prénom, adresse email, message <br/>
                        Aucune donnée sensible n&apos;est collectée.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">4. Utilisation des données</h2>
                    <p className="font-medium mt-2">Les données sont collectées uniquement pour les finalités suivantes : <br/>
                        <br/>
                        Répondre à vos demandes via le formulaire de contact <br/>
                        Améliorer l&apos;expérience utilisateur et analyser le trafic via Google Analytics <br/>
                        Respecter nos obligations légales <br/>
                        Vos données ne sont jamais vendues ni partagées à des tiers non autorisés.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">5. Cookies et traceurs</h2>
                    <p className="font-medium mt-2">Lors de votre première visite, un bandeau vous informe de l'utilisation de cookies. <br/>
                        <br/>
                        Cookies utilisés : <br/>
                        Cookies analytiques (Google Analytics), activés uniquement après consentement <br/>
                        Cookies fonctionnels pour mémoriser vos choix de navigation ou préférences <br/>
                        Vous pouvez à tout moment refuser ou retirer votre consentement via le bandeau de cookies ou les paramètres de votre navigateur.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">6. Durée de conservation des données</h2>
                    <p className="font-medium mt-2">Données issues du formulaire : conservées 12 mois maximum<br/>
                        Données analytiques anonymisées : jusqu&apos;à 14 mois
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">7. Vos droits</h2>
                    <p className="font-medium mt-2">Conformément au RGPD (Règlement Général sur la Protection des Données), vous disposez des droits suivants :<br/>
                        <br/>
                        Droit d&apos;accès à vos données<br/>
                        Droit de rectification ou d&apos;effacement<br/>
                        Droit de retrait du consentement<br/>
                        Droit à la portabilité<br/>
                        Droit d&apos;introduire une réclamation auprès de la CNIL<br/>
                        Pour exercer vos droits, contactez-nous à : contact@daikoomyo.fr
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">8. Sécurité</h2>
                    <p className="font-medium mt-2">Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir la sécurité de vos données personnelles.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-purple-500">9. Modifications</h2>
                    <p className="font-medium mt-2">La présente politique peut être modifiée à tout moment. La dernière mise à jour date du : 15/07/2025.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default page