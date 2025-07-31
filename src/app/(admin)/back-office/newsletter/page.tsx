import React from 'react'
import { BackButton } from '../../components/BackButton';
import { getEmails } from '@/lib/pages/newsletter';

export const dynamic = "force-dynamic";

const page = async () => {

    const emails = await getEmails();

    if (!emails.success) {
        return (
            <div className="py-20 bg-pink-200 h-[100vh] flex flex-col gap-10 items-center">
                <h1>{emails.message}</h1>
            </div>
        )
    }

    return (
    <div className="py-20 bg-pink-200 min-h-[100vh] flex flex-col gap-10 items-center">
        <BackButton />
        <h1 className="text-5xl text-center font-bold mt-20 text-shadow-lg text-shadow-pink-300 border-b-pink-300 border-b-2">Mes abonnés à la newsletter:</h1>
        <div className="flex flex-col gap-5">
            {emails.emails !== undefined && emails.emails?.length >= 1 && emails.emails.map((email, index) => {
                return (
                    <div key={index} className={`p-5 rounded-lg shadow-2xl`}>
                        <h2><span className="font-extrabold">{email.email.toUpperCase()}</span></h2>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default page;