import React from 'react';
import { getEmails } from '@/lib/pages/newsletter';
import TitlePage from '../../components/TitlePage';

export const dynamic = "force-dynamic";

interface IEmail {
    id: string;
    email: string;
    token: string;
    date: Date;
}

const page = async () => {

    
    const emails = await getEmails();

    if (!emails.success) {
        return (
            <div className="py-20 bg-pink-50 h-[100vh] flex flex-col gap-10 items-center">
                <h1>{emails.message}</h1>
            </div>
        )
    }

    return (
    <div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
        <TitlePage />
        <div className="flex flex-col gap-5">
            {emails.emails !== undefined && emails.emails?.length >= 1 && emails.emails.map(( email: IEmail) => {
                return (
                    <div key={email.id} className={`p-5 rounded-lg shadow-2xl`}>
                        <h2><span className="font-extrabold">{email.email.toUpperCase()}</span></h2>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default page;