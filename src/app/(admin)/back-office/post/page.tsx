import { BackButton } from "../../components/BackButton";

export default function Page() {
    return (
		<div className="py-20 bg-pink-200 min-h-[100vh] flex flex-col gap-10 items-center">
			<BackButton />
			<h1 className="text-5xl font-bold mt-20 text-shadow-lg text-shadow-pink-300 border-b-pink-300 border-b-2">Creer un article</h1>
		</div>
    )
}

// "use client"

// import Link from 'next/link';
// import React, { useState } from 'react';
// import { uploadImage } from './image.action';
// import NotePicker from '@/components/features/page - post/NotePicker';

// function Page() {

//     const [imageUrl, setImageUrl] = useState("");

//     const handleChange = async (file: { originalname: string; mimetype: any; buffer: any; }) => {
//         const image :string = await uploadImage(file);
//         setImageUrl(image)
//     }

//   return (
//     <div className="py-20 bg-gray-300 min-h-[100vh] flex flex-col gap-10 items-center">
//         <div className="flex flex-col gap-10">
//             <h1>Creer un post</h1>
//             <Link href="/back-office">Retour</Link>
//         </div>
//         <div className="w-full">
//             <form action="" className="bg-gray-300 p-8 w-full xl:w-2/5 rounded-lg flex flex-col items-center gap-5 mx-auto shadow-2xl">
//                 <input type="text" placeholder="Votre titre" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <input type="text" placeholder="Votre catégorie" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <label htmlFor="image" className="bg-gray-200 rounded-lg border-1 border-4ray-700 cursor-pointer p-1 shadow-lg">Choisir une image</label>
//                 <input id="image" type="file" name="image" className="hidden" onChange={(e) => {
//                     if (e.target.files && e.target.files[0]) {
//                     const file = e.target.files[0];
                    
//                     handleChange({
//                         originalname: file.name,
//                         mimetype: file.type,
//                         buffer: file, 
//                     });
//                     }
//                 }} />
//                 <textarea placeholder="Votre résumé" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-2/3 p-1 shadow-lg" />
//                 <textarea placeholder="Votre paragraphe 1" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <textarea placeholder="Votre paragraphe 2" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <textarea placeholder="Votre paragraphe 3" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <textarea placeholder="Votre paragraphe 4" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <textarea placeholder="Votre paragraphe 5" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <textarea placeholder="Votre paragraphe 6" className="bg-gray-200 rounded-lg border-1 border-gray-400 w-full xl:w-2/3 p-1 shadow-lg" />
//                 <button className="rounded-lg bg-gray-700 text-white font-bold px-2 py-1 cursor-pointer border-1 border-gray-400 shadow-xl">Valider</button>
//             </form>
//         </div>
//         <div>
//             <NotePicker />
//         </div>
//     </div>
//   )
// }

// export default Page;