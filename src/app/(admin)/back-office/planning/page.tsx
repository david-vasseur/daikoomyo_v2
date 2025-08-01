import { getAllMeet } from '@/lib/pages/meet'
import React from 'react'
import MeetContent from '../../components/planinng/PlaningContent';

export const dynamic = "force-dynamic";

const page = async () => {

    const meets = await getAllMeet();

    if (!meets) {
        return (
            <div className="py-20 bg-pink-50 h-[100vh] flex flex-col gap-10 items-center">
                <h1>Pas de rendez-vous en cours</h1>
            </div>
        )
    }

    return (
    <div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
        <MeetContent meets={meets} />

    </div>
    )
}

export default page;