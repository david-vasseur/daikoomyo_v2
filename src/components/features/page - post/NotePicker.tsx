"use client"

import React, { useState } from 'react'
import Tiptap from './TipTap'

function NotePicker() {

    const [content, setContent] = useState<string>("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleContentChange = (reason: any) => {
        setContent(reason);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit} action="" className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10">
        <div className="text-3xl text-center text-sky-500 mb-10">
            Notes Picker
        </div>
        <Tiptap
            content={content}
            onChange={(newContent: string) => handleContentChange(newContent)}
        />
    </form>
  )
}

export default NotePicker