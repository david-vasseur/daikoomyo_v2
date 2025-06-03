import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Mon <span className="text-purple-600">histoire</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 font-semibold">
            Découvrez l&apos;histoire et la philosophie qui inspirent ma pratique spirituelle
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <div className="relative flex flex-col justify-end h-[500px]">
                <div className="bg-purple-100 absolute -top-6 -left-6 w-full h-full rounded-lg"></div>
                <img 
                    src="/camille2.jpg" 
                    alt="Spiritual Practitioner" 
                    className="relative z-10 rounded-lg shadow-lg w-full object-cover"
                    style={{ height: "500px" }}
                />
                </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-3xl font-extrabold text-gray-800 mb-4">Camille Boucher</h3>
            <h4 className="text-xl font-bold text-purple-600 mb-6">Energeticienne</h4>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-semibold text-justify">
              Depuis plus de 20 ans, je me consacre aux médecines douces et au bien-être. Mon parcours a commencé dans l&apos;horticulture et le médico-social, avant de m&apos;orienter vers le soin énergétique et l&apos;accompagnement spirituel après avoir découvert un don naturel pour soigner avec mes mains.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-semibold text-justify">
              Formée maître Reiki, praticienne en EFT, j&apos;ai enrichi ma pratique d&apos;outils puissants pour favoriser un rééquilibrage physique, émotionnel et énergétique. J&apos;intègre aussi les fleurs de Bach pour un accompagnement encore plus personnalisé.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed font-semibold text-justify">
              Je propose aujourd&apos;hui des soins à domicile ou à distance, dans une approche globale et bienveillante. Mon objectif : vous aider à retrouver harmonie et vitalité en tenant compte de toutes les dimensions de votre être.
            </p>
            
            <div className="flex gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">200+</p>
                <p className="text-gray-600 font-semibold">Seances</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">5+</p>
                <p className="text-gray-600 font-semibold">Expériences</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">4</p>
                <p className="text-gray-600 font-semibold">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;