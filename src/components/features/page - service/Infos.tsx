import React from 'react';
import IContent from '@/types/page';

function Infos({ content }: { content: IContent }) {

    return (
        <section className="py-20 bg-purple-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif text-center font-semibold text-gray-800 mb-16">
                       {content?.subTitle[0]}<span className='text-purple-600'> {content?.subTitle[1]}</span> 
                    </h2>

                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <img 
                                src={content?.image} 
                                alt={content?.alt} 
                                className="rounded-lg shadow-md"
                                />
                            </div>
                            <div>
                                <div className="space-y-6">
                                    {content?.infos.map((inf, index) => (
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