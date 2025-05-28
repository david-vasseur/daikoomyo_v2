import { Link } from 'lucide-react'
import React from 'react'

function Page() {
  return (
    <div className="py-20 bg-gray-200 h-full">
        <div>
            <h1>Creer un post</h1>
            <Link href="/back-office">Retour</Link>
        </div>
        <div className="mx-auto">
            <form action="" className="bg-gray-300 p-8 w-full xl:w-1/2 rounded-lg flex flex-col items-center gap-5 mx-auto shadow-2xl">
                <input type="text" placeholder="Votre titre" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <input type="text" placeholder="Votre catégorie" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <input type="file" className="bg-gray-200 rounded-lg border-1 border-4ray-700  p-1 shadow-lg" />
                <textarea placeholder="Votre résumé" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-2/3 p-1 shadow-lg" />
                <textarea placeholder="Votre paragraphe 1" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <textarea placeholder="Votre paragraphe 2" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <textarea placeholder="Votre paragraphe 3" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <textarea placeholder="Votre paragraphe 4" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <textarea placeholder="Votre paragraphe 5" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <textarea placeholder="Votre paragraphe 6" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
                <button className="rounded-lg bg-gray-700 text-white font-bold px-2 py-1 cursor-pointer border-1 border-gray-400 shadow-xl">Valider</button>
            </form>
        </div>
    </div>
  )
}

export default Page;