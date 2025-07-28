"use client";

import { AlignCenter, AlignJustify, AlignLeft, AlignRight, BoldIcon, Heading1, Heading2, Heading3, Image, ItalicIcon, Strikethrough, UnderlineIcon } from 'lucide-react';
import React from 'react';
import { Editor } from '@tiptap/react';

function PostMenuBar({ editor }: { editor: Editor | null }) {
    if (!editor) {
        return null
    }

    return (
        <div className="control-group">
            <div className="button-group flex items-center justify-center flex-wrap gap-4">
                <Heading1
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <Heading2
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={`${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <Heading3
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={`${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <BoldIcon
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`${editor.isActive('bold') ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <ItalicIcon
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`${editor.isActive('italic') ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <Strikethrough
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`${editor.isActive('strike') ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <UnderlineIcon
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`${editor.isActive('underLine') ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <AlignLeft
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <AlignCenter
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <AlignRight
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <AlignJustify
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={`${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
                <Image
                    className={`${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''} bg-violet-400 cursor-pointer rounded-sm p-1 shadow-neutral-700 shadow-md hover:scale-110 duration-200 transition-all`}
                />
            </div>
        </div>
    )
}

export default PostMenuBar;

