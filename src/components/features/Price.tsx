"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import priceData from '../../data/priceData';

function Price() {

    const router = usePathname();

    const pathName = router.replace(/^\/+/, '');

    const price = priceData.find(el => el.name === pathName)

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif text-center font-semibold text-gray-800 mb-16">
                    Offres <span className="text-purple-600">{price?.subName}</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {price?.prices.map((plan, index) => (
                    <div key={index} className={`rounded-lg overflow-hidden ${plan.popular ? 'border-2 border-purple-600 relative' : 'border border-gray-200'}`}>
                    {plan.popular && (
                        <div className="bg-purple-600 text-white text-center py-2">
                        Le plus populaire
                        </div>
                    )}
                    <div className="p-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
                        <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}€</div>
                        <p className="text-gray-600 mb-6">{plan.duration}</p>
                        <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                            <span className="text-purple-600 mr-2">✓</span>
                            {feature}
                            </li>
                        ))}
                        </ul>
                        <a
                        href="#contact"
                        className={`block text-center py-3 px-6 rounded-full transition-colors ${
                            plan.popular
                            ? 'bg-purple-600 hover:bg-purple-700 text-white'
                            : 'bg-purple-100 hover:bg-purple-200 text-purple-600'
                        }`}
                        >
                        Réserver
                        </a>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>
    )
}

export default Price