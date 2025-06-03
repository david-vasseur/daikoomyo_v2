import Link from 'next/link';
import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

const BlogCard: React.FC<BlogPost> = ({ title, excerpt, date, image, category }) => {
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
            href="#" 
            className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center"
            >
            Voir plus... 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
        </div>
    </div>
  );
};

const Blog: React.FC = () => {
    const blogPosts: BlogPost[] = [
        {
        title: "Trouver la paix intérieure dans un monde chaotique",
        excerpt: "Découvrez des techniques de méditation pratiques pour rester serein face aux défis de la vie et vous reconnecter à votre essence profonde.",
        date: "15 juin 2025",
        image: "https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Méditation"
        },
        {
        title: "Comprendre vos centres énergétiques",
        excerpt: "Apprenez à connaître les sept chakras principaux, leur signification, et comment leur équilibre peut transformer votre bien-être physique et émotionnel.",
        date: "28 mai 2025",
        image: "https://images.pexels.com/photos/8964915/pexels-photo-8964915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Guérison énergétique"
        },
        {
        title: "Le pouvoir des rituels sacrés",
        excerpt: "Découvrez comment intégrer de simples rituels à votre quotidien peut renforcer votre lien avec vous-même et avec l’univers.",
        date: "10 mai 2025",
        image: "https://images.pexels.com/photos/5793955/pexels-photo-5793955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Pratiques spirituelles"
        }
    ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Mon <span className="text-purple-600">Blog</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 font-semibold">
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
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/blog" 
            className="inline-block bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full transition-colors shadow-md"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;