"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import infoData from '../../data/infoData';

function Infos() {

    const router = usePathname();

    const pathName = router.replace(/^\/+/, '');

    const info = infoData.find(el => el.name === pathName)

    return (
        <section className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif text-center font-semibold text-gray-800 mb-16">
                       {info?.subTitle[0]}<span className='text-purple-600'> {info?.subTitle[1]}</span> 
                    </h2>

                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <img 
                                src={info?.image} 
                                alt={info?.alt} 
                                className="rounded-lg shadow-md"
                                />
                            </div>
                            <div>
                                <div className="space-y-6">
                                    {info?.infos.map((inf, index) => (
                                        <div key={index}>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{inf.title}</h3>
                                            <p className="text-gray-600">{inf.value}</p>
                                        </div>
                                    ))}  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
    )
}

export default Infos