import React from 'react';
import { Flower, Heart, Zap, FlaskConical, Sparkle, SunMoon, Shield, Target } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <div className="bg-white flex flex-col justify-between rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl group">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
            <div className="text-purple-600 group-hover:text-white transition-colors duration-300">
            {icon}
            </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-6">
            <Link href={href} className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center">
                En savoir plus
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
        </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
  {
    title: "Gestion des douleurs physiques avec l’EFT",
    description: "Apaisez les douleurs physiques avec l’EFT en libérant les tensions émotionnelles et en rééquilibrant l’énergie du corps.",
    icon: <Zap className="h-8 w-8" />,
    href: "/eft"
  },
  {
    title: "Gestion du stress avec l’EFT",
    description: "Apprenez à apaiser l’anxiété et à renforcer votre résilience au quotidien par des techniques de libération émotionnelle ciblées.",
    icon: <Heart className="h-8 w-8" />,
    href: "/eft"
  },
  {
    title: "Renforcement émotionnel avec l’EFT",
    description: "Utilisez l’EFT pour ancrer la confiance en soi, surmonter les croyances limitantes et retrouver une énergie mentale positive.",
    icon: <Shield className="h-8 w-8" />,
    href: "/eft"
  },
  {
    title: "Fleurs de Bach – Harmonie émotionnelle",
    description: "Redécouvrez l'équilibre émotionnel avec les élixirs floraux de Bach, adaptés à vos besoins spécifiques et à votre état d’âme.",
    icon: <Flower className="h-8 w-8" />,
    href: "/fleurs-de-bach"
  },
  {
    title: "Fleurs de Bach personnalisées",
    description: "Bénéficiez d’un accompagnement sur mesure avec une synergie de fleurs de Bach sélectionnées pour soutenir votre transformation intérieure.",
    icon: <FlaskConical className="h-8 w-8" />,
    href: "/fleurs-de-bach"
  },
  {
    title: "Reiki – Énergie de guérison",
    description: "Recevez une transmission d’énergie universelle pour rétablir l’harmonie entre corps, esprit et âme dans une profonde détente.",
    icon: <Sparkle className="h-8 w-8" />,
    href: "/soin-energetique"
  },
  {
    title: "Reiki pour l’alignement spirituel",
    description: "Reconnectez-vous à votre essence et stimulez votre croissance spirituelle grâce à des soins Reiki doux et puissants.",
    icon: <SunMoon className="h-8 w-8" />,
    href: "/soin-energetique"
  },
  {
    title: "Reiki pour l’ancrage et la clarté",
    description: "Une séance de Reiki centrée sur l’ancrage, la libération mentale et la reconnexion à votre sagesse intérieure.",
    icon: <Target className="h-8 w-8" />,
    href: "/soin-energetique"
  }
];


  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Pratiques et <span className="text-purple-600">approches</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 font-semibold">
            Prestations holistiques pour accompagner votre cheminement spirituel et votre transformation personnelle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;