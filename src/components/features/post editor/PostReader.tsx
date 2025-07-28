"use client"

import Image from '@tiptap/extension-image'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import React from 'react';

import "./PostEditor.css";

function PostReader({ jsonContent }: { jsonContent: Record<string, any> }) {

    const reader = useEditor({
        extensions: [
            StarterKit,
            Image,
            Underline.configure({
			HTMLAttributes: {
			class: "underline decoration-3 decoration-violet-500"
			}
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        editable: false,
        content: jsonContent,
        immediatelyRender: false,
    })

  return (
    <div className="w-full p-2 mx-2">
        <EditorContent editor={reader} className="post-editor" />
    </div>
  )
}

export default PostReader;