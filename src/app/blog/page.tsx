import React from 'react';
import postData from '../../data/postData';
import BlogCard from '@/components/ui/BlogCard';

function Page() {

    const blogPosts = postData;

    return (
        <div className="flex gap-5 text-gray-800">
            <section id="side" className="py-20 w-1/5 bg-gradient-to-r from-gray-900/5 to-gray-200/60 shadow-xl">
                <label
                className="fixed left-5 top-30 shadow-lg flex items-center px-4 py-2 rounded-lg border border-gray-200 hover:border-purple-500 cursor-pointer transition-colors"
                >
                <input type="checkbox" className="mr-3 accent-purple-600" />
                <span className="text-sm font-semibold">EFT</span>
                </label> 

                <label
                className="fixed left-5 top-40 shadow-lg flex items-center px-4 py-2 rounded-lg border border-gray-200 hover:border-purple-500 cursor-pointer transition-colors"
                >
                <input type="checkbox" className="mr-3 accent-purple-600" />
                <span className="text-sm font-semibold">Reiki</span>
                </label>

                <label
                className="fixed left-5 top-50 shadow-lg flex items-center px-4 py-2 rounded-lg border border-gray-200 hover:border-purple-500 cursor-pointer transition-colors"
                >
                <input type="checkbox" className="mr-3 accent-purple-600" />
                <span className="text-sm font-semibold">fleurs de bach</span>
                </label>

                <label
                className="fixed left-5 top-60 shadow-lg flex items-center px-4 py-2 rounded-lg border border-gray-200 hover:border-purple-500 cursor-pointer transition-colors"
                >
                <input type="checkbox" className="mr-3 accent-purple-600" />
                <span className="text-sm font-semibold">Tirage</span>
                </label>
        
            </section>
            <section id="blog" className="py-40 pr-5 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                        Mon <span className="text-purple-600">Blog</span>
                    </h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
                    <p className="text-gray-600">
                        Sagesse et conseils issus de mon blog pour accompagner votre cheminement spirituel
                    </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard 
                            key={index}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            image={post.image}
                            category={post.category}
                            slug={post.slug}
                        />
                    ))}
                    </div>
                    
                    <div className="text-center mt-12">
                    <a 
                        href={`/blog/`}
                        className="inline-block bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full transition-colors shadow-md"
                    >
                        Charger plus d'articles
                    </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page;




