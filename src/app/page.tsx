import About from "@/components/features/page - home/About";
import Blog from "@/components/features/page - home/Blog";
import Comments from "@/components/features/page - home/Comments";
import Contact from "@/components/features/page - home/Contact";
import Hero from "@/components/features/page - home/Hero";
import Services from "@/components/features/page - home/Services";
import { getLastComments } from "@/lib/pages/comments";

const Page = async () => {

	const comments = await getLastComments();

	return (
		<>
			<Hero />
			<About />
			<Services />
			<Contact />
			<Blog />
			<Comments comments={comments} />
		</>
	);
}

export default Page;