import BlogCard from '@/components/ui/BlogCard';
import { getPost } from '@/lib/pages/blog';
import Link from 'next/link';
import React from 'react';

const Blog: React.FC = async () => {

    const blogPosts = await getPost();

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
						slug={post.slug}
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