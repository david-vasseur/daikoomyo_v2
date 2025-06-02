import { getAllMeet } from '@/lib/pages/meet'
import React from 'react'
import { BackButton } from '../../components/BackButton';

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
    <div className="py-20 bg-pink-200 min-h-[100vh] flex flex-col gap-10 items-center">
        <BackButton />
        <h1 className="text-5xl font-bold mt-20 text-shadow-lg text-shadow-pink-300 border-b-pink-300 border-b-2">Mon planing:</h1>
        <div className="flex flex-col gap-5">
            {meets.map((meet, index) => {
                return (
                    <div key={index} className={`${meet.service === "soin-energetique" ? "bg-gray-200" : meet.service === "eft" ? "bg-blue-200" : "bg-green-200"} p-5 rounded-lg shadow-2xl`}>
                        <h2><span className="font-extrabold">{meet.service.toUpperCase()}</span> avec {meet.option}</h2>
                        <h3>Rendez-vous avec {meet.name}</h3>
                        <h3><span className="font-extrabold">{meet.dateStart && `le ${new Date(meet.dateStart).toLocaleDateString('fr-FR')}`}</span> {`à ${new Date(meet.dateStart).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`}</h3>
                        <h3>à {meet.address}</h3>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default page;