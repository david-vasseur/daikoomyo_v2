import About from "@/components/About";
import Blog from "@/components/Blog";
import Comments from "@/components/Comments";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Contact />
			<Blog />
			<Comments />
		</>
	);
}
