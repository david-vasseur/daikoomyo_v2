import postData from "@/data/postData";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {

	const { slug } = await params;

	const post = postData.find((art) => art.slug === slug); 

	if (!post) {
		return null;
	}

	return {
		title: `${post.title} - Blog Daikoomyo`,
		description: post.excerpt || "Article du blog Daikoomyo sur le bien-être et l’énergétique.",
		openGraph: {
		title: `${post.title} - Blog Daikoomyo`,
		description: post.excerpt || "",
		url: `https://daikoomyo.fr/blog/${slug}`,
		siteName: "Daikoomyo",
		locale: "fr_FR",
		type: "article",
		images: [
			{
			url: post.image || "https://daikoomyo.fr/og-blog.jpg",
			width: 1200,
			height: 630,
			alt: post.title,
			},
		],
		},
		twitter: {
		card: "summary_large_image",
		title: `${post.title} - Blog Daikoomyo`,
		description: post.excerpt || "",
		images: [post.image || "https://daikoomyo.fr/og-blog.jpg"],
		},
		robots: {
		index: true,
		follow: true,
		},
	};
}


export async function generateStaticParams() {
  return postData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const article = postData.find((art) => art.slug === slug);

	if (!article) {
		return <h2 className="text-center text-xl mt-20">Page non trouvée</h2>;
	}

	return (
		<div className="py-20 bg-gray-100 flex items-center justify-center">
			<div className="bg-white m-2 w-full xl:w-1/2 2xl:w-1/3 grid grid-rows-[auto_auto] rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
				<div className="relative overflow-hidden h-72">
					<img
						src={article.image}
						alt={article.title}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
						{article.category}
					</div>
				</div>

				<div className="p-6 h-full flex flex-col justify-between">
					<p className="text-gray-500 text-sm mb-2">{article.date}</p>
					<h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
						{article.title}
					</h3>
					{article.article.map((paragraph, index) => (
						<p key={index} className="text-gray-600 mb-4">{paragraph}</p>
					))}
					<Link
						href="/blog"
						className="text-purple-600 font-semibold hover:text-purple-700 transition-colors inline-flex items-center"
					>
						<span className="mr-2 transform group-hover:translate-x-1 transition-transform duration-300">←</span>
						Retour
					</Link>
				</div>
			</div>
		</div>
	);
}
