"use client";

import { useState } from "react";
import TitlePage from "../TitlePage";
import { NewsLetterForm } from "./NewsletterForm";
import NewsEditor from "./NewsLetterEditor";

interface IEmail {
    id: string;
    email: string;
    token: string;
    date: Date;
}

const ClientEmails = ({ emails }: { emails: IEmail[] }) => {
    const [selected, setSelected] = useState(1);
    const [stringNews, setStringNews] = useState("")

    return (
        <div className="py-20 bg-pink-50 min-h-[100vh] flex flex-col gap-10 items-center">
            <TitlePage
                title1="Rédiger une news"
                title2="Liste Abonnés"
                selected={selected}
                onChange={setSelected}
            />

            {selected === 1 && (
                <div className="text-purple-800 font-semibold flex flex-col gap-6 justify-center items-center">
                    <NewsEditor onUpdate={(post) => setStringNews(post)} />
                    <NewsLetterForm stringNews={stringNews} emails={emails} />
                </div>
            )}

            {selected === 2 && (
                <div className="flex flex-col gap-5">
                    {emails.map((email) => (
                        <div key={email.id} className="p-5 rounded-lg shadow-2xl">
                            <h2>
                                <span className="font-extrabold">{email.email.toUpperCase()}</span>
                            </h2>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ClientEmails;