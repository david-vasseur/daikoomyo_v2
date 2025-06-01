import { getAllMeet } from '@/lib/pages/meet'
import React from 'react'

export const dynamic = "force-dynamic";

const page = async () => {

    const meets = await getAllMeet();

    if (!meets) {
        return (
            <div className="py-20 bg-pink-200 h-[100vh] flex flex-col gap-10 items-center">
                <h1>Pas de rendez-vous en cours</h1>
            </div>
        )
    }

    return (
    <div className="py-20 bg-pink-200 h-[100vh] flex flex-col gap-10 items-center">
        <h1>Mon planing:</h1>
        <div className="flex flex-col gap-5">
            {meets.map((meet, index) => {
                return (
                    <div key={index} className="p-5 bg-gray-200 rounded-lg shadow-2xl">
                        <h2>Rendez-vous avec {meet.name}</h2>
                        <h3>{meet.dateStart && `le ${new Date(meet.dateStart).toLocaleDateString('fr-FR')} à ${new Date(meet.dateStart).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`}</h3>
                        <h3>à {meet.address}</h3>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default page;