import React from 'react';
import { getEmails } from '@/lib/pages/newsletter';
import ClientEmails from '../../components/newsletter/NewsletterContent';

export const dynamic = "force-dynamic";

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
        <ClientEmails emails={emails.emails ?? []} />
    )
}

export default page;