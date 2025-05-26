"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import benefitData from '../../data/benefitData';
import Icons from '../ui/Icons';

function Benefits() {

    const router = usePathname();

    const pathName = router.replace(/^\/+/, '');

    const benefit = benefitData.find(el => el.name === pathName);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-serif text-center font-semibold text-gray-800 mb-16">
                    Les bénéfices <span className="text-purple-600">{benefit?.subName}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefit?.benefits.map((benefit, index) => {
                        const IconComponent = Icons[benefit.icon as keyof typeof Icons];
                        return (                      
                            <div key={index} className="bg-purple-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                <div className="text-purple-600 mb-4">
                                    {IconComponent && <IconComponent className="h-8 w-8" />}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Benefits;