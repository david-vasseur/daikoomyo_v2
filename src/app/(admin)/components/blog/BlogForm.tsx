"use client"

import PostEditor from '@/components/features/post editor/PostEditor';
import React, { useState } from 'react';
import { createPost } from './post.action';

function BlogForm() {

    const [stringArticle, setStringArticle] = useState("");

  return (
    <form action={createPost} className="flex flex-col gap-10 items-center">
        <input type="text" name="title" className="px-3 py-1.5 shadow-gray-800 shadow-md rounded-lg border-gray-400 border-2" placeholder="Titre" />
        <input type="text" name="slug" className="px-3 py-1.5 shadow-gray-800 shadow-md rounded-lg border-gray-400 border-2" placeholder="Slug" />
        <input type="text" name="category" className="px-3 py-1.5 shadow-gray-800 shadow-md rounded-lg border-gray-400 border-2" placeholder="Catégorie" />
        <input type="text" name="image" className="px-3 py-1.5 shadow-gray-800 shadow-md rounded-lg border-gray-400 border-2" placeholder="Image de la card" />
        <input type="text" name="excerpt" className="px-3 py-1.5 shadow-gray-800 shadow-md rounded-lg border-gray-400 border-2" placeholder="Résumé" />
        <input type='hidden' name="article" value={stringArticle} />
        <PostEditor onUpdate={(post) => setStringArticle(JSON.stringify(post))} />
        <button type="submit" className="rounded-lg bg-gray-700 text-white font-bold px-2 py-1 cursor-pointer border-1 border-gray-400 shadow-gray-800 shadow-md">Valider</button>
    </form>	
  )
}

export default BlogForm;