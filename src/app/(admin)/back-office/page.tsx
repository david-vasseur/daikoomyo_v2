import Link from 'next/link';
import React from 'react';
import { SignOut } from '../components/SignOut';

function Page() {

	return (
		<div className="py-20 bg-pink-200 min-h-[100vh] flex flex-col gap-10 items-center">
			<SignOut />
			<h1 className="text-5xl font-bold mt-20 text-shadow-lg text-shadow-pink-300 border-b-pink-300 border-b-2">Tableau de bord</h1>
			<div className="flex gap-10">
				<Link href="/back-office/post" className="px-4 py-2 rounded-full bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Creer un Post</Link>
				<Link href="/back-office/planning" className="px-4 py-2 rounded-full bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Voir mon planning</Link>
				<Link href="/back-office/planning" className="px-4 py-2 rounded-full bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Fichier client</Link>
			</div>
			
		</div>
	)
}

export default Page;