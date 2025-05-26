"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface IComment {
  name: string;
  role: string;
  quote: string;
  rate: number;
}

const Comments: React.FC = () => {
    const testimonials: IComment[] = [
        {
        name: "Sarah Johnson",
        role: "Février 2024",
        quote: "Travailler avec Emma a été une véritable transformation. Son accompagnement spirituel m’a permis de me reconnecter à ma véritable mission de vie et de dépasser des blocages ancrés depuis des années. Aujourd’hui, je vis avec une clarté et une paix intérieure que je n’aurais jamais cru possibles.",
        rate: 5
        },
        {
        name: "Michael Chen",
        role: "Avril 2024",
        quote: "J’étais plutôt sceptique au début, mais les lectures intuitives d’Emma se sont révélées étonnamment précises. Elles m’ont permis de prendre une décision cruciale en toute confiance. Son travail énergétique m’aide aussi à mieux gérer le stress au quotidien.",
        rate: 5
        },
        {
        name: "Aisha Patel",
        role: "Janvier 2024",
        quote: "Les séances d’équilibrage des chakras avec Emma ont libéré ma créativité d’une manière inattendue. J’ai réalisé mes œuvres les plus inspirées après nos rencontres. Sa guidance douce est un véritable cadeau.",
        rate: 4
        },
        {
        name: "James Wilson",
        role: "Mars 2024",
        quote: "Grâce aux méditations guidées d’Emma, j’ai trouvé des outils concrets pour apaiser mon anxiété et cultiver un calme intérieur au quotidien. Son approche est à la fois pratique et profondément spirituelle.",
        rate: 5
        }
    ];

const [currentIndex, setCurrentIndex] = useState(0);


const setStars = (rate: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star key={i} className={i < rate ? "text-yellow-400" : "text-gray-300"} />
        );
    }
    return stars
}

  

const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      	prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
};

const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      	prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
};

  return (
    <section id="testimonials" className="py-20 bg-purple-50">
		<div className="container mx-auto px-4">
			<div className="max-w-3xl mx-auto text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
					Mes <span className="text-purple-600">Avis client</span>
				</h2>
				<div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
				<p className="text-gray-600">
					Voici les témoignages de ceux qui ont vécu une transformation grâce à notre travail
				</p>
			</div>
			
			<div className="max-w-4xl mx-auto">
				<div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
					<div className="absolute -top-6 -left-6">
						<div className="bg-purple-600 rounded-full p-4">
							<Quote className="h-8 w-8 text-white" />
						</div>
					</div>
					
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="md:w-1/3">
							<div className="flex gap-1">
								{setStars(testimonials[currentIndex].rate)}
							</div>
						</div>
						
						<div className="md:w-2/3 text-center md:text-left">
							<p className="text-gray-700 italic mb-6 leading-relaxed">
								"{testimonials[currentIndex].quote}"
							</p>
							
							<h4 className="text-xl font-semibold text-gray-800">
								{testimonials[currentIndex].name}
							</h4>
							
							<p className="text-purple-600">
								{testimonials[currentIndex].role}
							</p>
						</div>
					</div>
					
					<div className="flex justify-center md:justify-end mt-8 gap-4">
						<button 
							onClick={prevTestimonial}
							className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
						>
							<ChevronLeft className="h-5 w-5" />
						</button>
					
						<button 
							onClick={nextTestimonial}
							className="w-10 h-10 rounded-full border border-purple-300 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
						>
							<ChevronRight className="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
    </section>
  );
};

export default Comments;