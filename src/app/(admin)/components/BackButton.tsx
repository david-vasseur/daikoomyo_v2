'use client'

import { ChevronLeft } from "lucide-react"
import { redirect } from "next/navigation"


export const BackButton = () => {

  return (
    <button 
        className="flex gap-2 py-2 text-purple-600 font-bold cursor-pointer"
        onClick={() => redirect('/back-office')}>
            <ChevronLeft />
            Retour
    </button>
  )
}