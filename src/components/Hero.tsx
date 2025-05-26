import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/fond1.png')",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-blue-900/60" />
      </div>

      <div className="container mx-auto px-4 py-20 z-10 text-white">
        <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}> 
                Chaque Journée est une nouvelle chance de <span className="text-purple-300">changer</span> votre vie...
            </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Ma mission est de vous accompagner avec bienveillance sur le sentier de la guérison intérieure, afin que vous puissiez retrouver votre véritable essence et vivre en pleine harmonie avec vous-même.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a 
              href="#contact" 
              className="bg-purple-600 font-semibold hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors shadow-lg text-center"
            >
              Prendre RDV
            </a>
            <a 
              href="#services" 
              className="bg-transparent font-semibold border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors shadow-lg text-center"
            >
              Decouvrir les Soins
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10" />
    </section>
  );
};

export default Hero;