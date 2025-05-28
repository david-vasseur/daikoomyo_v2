"use client"

import { useTransition } from "react";
import { testMongo } from "@/lib/actions/test.action";

export default function PostForm() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      slug: formData.get("slug") as string,
      excerpt: formData.get("excerpt") as string,
      article: [formData.get("article") as string],
      date: new Date(formData.get("date") as string),
      image: formData.get("image") as string,
      category: formData.get("category") as string,
      like: Number(formData.get("like")),
      dislike: Number(formData.get("dislike")),
    };

    startTransition(() => {
      testMongo(data);
    });
  };

  return (
<form onSubmit={handleSubmit} className="flex flex-col gap-5">
  <input className="bg-amber-200 p-2" name="title" placeholder="Titre" required />
  <input className="bg-amber-200 p-2" name="slug" placeholder="Slug" required />
  <textarea className="bg-amber-200 p-2" name="excerpt" placeholder="Excerpt" />
  <textarea className="bg-amber-200 p-2" name="article" placeholder="Article (1 paragraphe)" />
  <input className="bg-amber-200 p-2" name="date" type="date" required />
  <input className="bg-amber-200 p-2" name="image" placeholder="URL Image" />
  <input className="bg-amber-200 p-2" name="category" placeholder="Catégorie" />
  <input className="bg-amber-200 p-2" name="like" type="number" defaultValue={0} />
  <input className="bg-amber-200 p-2" name="dislike" type="number" defaultValue={0} />
  <button className="cursor-pointer p-2 bg-amber-500" type="submit" disabled={isPending}>
    Créer Post
  </button>
</form>
  );
}



