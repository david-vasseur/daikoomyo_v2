"use client";

import { useState } from "react";
import TitlePage from "../TitlePage";
import BlogForm from "./BlogForm";
import { IPost } from "@/types/post";
import BlogCard from "@/components/ui/BlogCard";


const ClientBlog = ({ articles }: { articles: IPost[] }) => {
    const [selected, setSelected] = useState(1);

    return (
        <>
            <TitlePage
                    title1="Rédiger un article"
                    title2="Editer un article"
                    selected={selected}
                    onChange={setSelected}
                />
            <div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
                

                {selected === 1 && (
                    <div className="text-purple-800 font-semibold flex flex-col gap-6 justify-center items-center">
                        <BlogForm />
                    </div>
                )}

                {selected === 2 && (
                    <div className="flex flex-col gap-5">
                        {articles.map((article, index) => (
                            <div key={index} className="p-5 rounded-lg shadow-2xl">
                                <BlogCard 
                                    key={index}
                                    title={article.title}
                                    excerpt={article.excerpt}
                                    date={article.date}
                                    image={article.image}
                                    category={article.category}
                                    slug={article.slug}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default ClientBlog;