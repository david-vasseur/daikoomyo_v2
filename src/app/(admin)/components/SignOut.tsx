'use client'

import { useClerk } from '@clerk/nextjs'

export const SignOut = () => {
	const { signOut } = useClerk()

	return (
		<button 
			className="px-4 py-2 rounded-full text-white bg-red-400 border-2 border-red-800 absolute left-4 top-4 shadow-lg shadow-gray-800 font-bold cursor-pointer"
			onClick={() => signOut({ redirectUrl: '/' })}>
				Se deconnecter
		</button>
	)
}





