import { getPost } from "@/lib/pages/blog";
import ClientBlog from "../../components/blog/BlogContent";

export default async function Page() {

	const articles = await getPost()

    return (
		<div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
			<ClientBlog articles={articles ?? []} />
		</div>
    )
}
