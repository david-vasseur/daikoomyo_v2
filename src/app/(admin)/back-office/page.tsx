"use client"

import React from 'react';
import { useUser } from "@clerk/clerk-react";

function Page() {

	const { isSignedIn, user } = useUser();

	if (!isSignedIn) {
		return null;
	}

	return (
		<div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
			<h1 className="text-5xl text-center font-bold mt-20 text-shadow-lg text-purple-500 text-shadow-purple-400">Bienvenue {user.firstName} {user.lastName}</h1>			
		</div>
	)
}

export default Page;