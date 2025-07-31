import Link from 'next/link';
import React from 'react';
import { SignOut } from '../components/SignOut';

function Page() {

	return (
		<div className="py-20 bg-pink-200 min-h-[100vh] flex flex-col gap-10 items-center">
			<SignOut />
			<h1 className="text-5xl font-bold mt-20 text-shadow-lg text-shadow-pink-300 border-b-pink-300 border-b-2">Tableau de bord</h1>
			<div className="flex items-center justify-center gap-2 xl:gap-10">
				<Link href="/back-office/post" className="min-h-[6svh] px-4 text-xs xl:text-xl text-center py-2 rounded-xl bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Creer un Post</Link>
				<Link href="/back-office/planning" className="min-h-[6svh] px-4 text-xs xl:text-xl text-center py-2 rounded-xl bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Voir mon planning</Link>
				<Link href="/back-office/clients" className="min-h-[6svh] px-4 text-xs xl:text-xl text-center py-2 rounded-xl bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Fichier client</Link>
				<Link href="/back-office/newsletter" className="min-h-[6svh] px-4 text-xs xl:text-xl text-center py-2 rounded-xl bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Newsletter</Link>
			</div>
			
		</div>
	)
}

export default Page;