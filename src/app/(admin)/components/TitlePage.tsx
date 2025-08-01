"use client"

import React, { useState } from 'react';

function TitlePage() {

    const [isList, setIsList] = useState(false);

    return (
        <div className="w-full flex">
            <h3 className={`${isList ? "bg-purple-600 font-medium" : "bg-purple-400 font-black border-b-1 border-r-1 underline" } w-[50%] p-2 text-center text-pink-50 transition-all duration-100`} onClick={() => setIsList(false)}>Rediger une news-letter</h3>
            <h3 className={`${isList ? "bg-purple-400 font-black border-b-1 border-l-1 underline" : "bg-purple-600 font-medium" } w-[50%] p-2 text-center text-pink-50 transition-all duration-100`} onClick={() => setIsList(true)}>liste abonnés</h3>
        </div>
    )
}

export default TitlePage;