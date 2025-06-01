import Link from 'next/link';
import React from 'react'

function Page() {
  return (
    <div className="py-20 bg-pink-200 h-[100vh] flex flex-col gap-10 items-center">
        <h1 className="text-5xl font-bold mt-20 text-shadow-violet-200 text-shadow-lg">Tableau de bord</h1>
        <Link href="/back-office/post" className="px-4 py-2 rounded-full bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Creer un Post</Link>
        <Link href="/back-office/planing" className="px-4 py-2 rounded-full bg-violet-400 text-white font-semibold border-2 border-violet-600 shadow-gray-700 shadow-lg">Voir mon planing</Link>
    </div>
  )
}

export default Page;