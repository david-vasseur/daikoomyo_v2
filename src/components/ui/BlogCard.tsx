import React from 'react';

interface IBlogCard {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  slug:string;
}

function BlogCard({ title, excerpt, date, image, category, slug }: IBlogCard) {
    return (
        <div className="bg-white grid grid-rows-[auto_auto] rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="relative overflow-hidden h-48">
                <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {category}
                </div>
            </div>
            
            <div className="p-6 h-full flex flex-col justify-between">
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                {title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
                <a 
                href={`/blog/${slug}`}
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center"
                >
                Voir plus... 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
            </div>
        </div>
    )
}

export default BlogCard