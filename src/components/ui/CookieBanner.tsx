"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function CookieBanner() {

    const [open, setOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    console.log(open);
    console.log(hasMounted);
    

    useEffect(() => {
        if (typeof window !== "undefined") {
        const consent = localStorage.getItem('google-cookie');
        if (consent !== "checked") {
            setOpen(true);
        }
        setHasMounted(true);
        }
    }, []);

    if (!hasMounted || !open) return null;

    const consentSubmit = (choice: string) => {
        localStorage.setItem('google-cookie', "checked");
        localStorage.setItem('site-consent', choice);
        setOpen(false);
    }

  return (
    <section id="cookie-banner" className="cookie-animation bg-gray-800/50 fixed bottom-0 z-[10000] w-[100vw] h-[150vh] flex flex-col items-center justify-center">
        <div className="min-h-[125vh]"></div>
        <div className="bg-purple-800 p-5 flex flex-col gap-10 items-center justify-center w-full h-[25vh]">
            <div>
                <p className="font-black text-amber-50 text-center">Ce site utilise des cookies pour améliorer l’expérience utilisateur. En continuant, vous acceptez notre <Link href={"/politique-de-confidentialite"} className="underline">politique de confidentialité</Link>.</p>
            </div>
            <div className="flex gap-16">
                <button className="p-2 font-semibold rounded-3xl text-amber-50 bg-purple-500 shadow-gray-700 shadow-lg border-2 border-amber-50 cursor-pointer hover:bg-gray-500/50 transition-all duration-300" onClick={() => consentSubmit("true")}>Tout Accepter</button>
                <button className="p-2 font-semibold rounded-3xl text-amber-50 bg-purple-500 shadow-gray-700 shadow-lg border-2 border-amber-50 cursor-pointer hover:bg-gray-500/50 transition-all duration-300" onClick={() => consentSubmit("false")}>Tout Refuser</button>
            </div>
        </div>
        
    </section>
  )
}

export default CookieBanner;