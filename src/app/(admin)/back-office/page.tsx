import Link from 'next/link';
import React from 'react';
import { SignOut } from '../components/SignOut';

function Page() {

	return (
		<div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
			{/* <SignOut /> */}
			<h1 className="text-5xl font-bold mt-20 text-shadow-lg text-pink-100 text-shadow-pink-300 border-b-pink-300 border-b-2">Bienvenue Camille</h1>			
		</div>
	)
}

export default Page;