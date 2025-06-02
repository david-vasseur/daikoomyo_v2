'use client'

import { MoveLeftIcon } from "lucide-react"
import { redirect } from "next/navigation"


export const BackButton = () => {

  return (
    <button 
        className="flex gap-2 px-4 py-2 rounded-full text-white bg-gray-400 border-2 border-gray-800 absolute left-4 top-4 shadow-lg shadow-gray-800 font-bold cursor-pointer"
        onClick={() => redirect('/back-office')}>
            <MoveLeftIcon />
            Retour
    </button>
  )
}