import { IToolbar } from '@/types/toolbar';
import { Bold, Code, Heading2, Italic, List, ListOrdered, Quote, Redo, Strikethrough, Underline, Undo } from 'lucide-react';
import React from 'react';



function Toolbar({ editor, content }: IToolbar) {

    if (!editor) {
        return null;
    }

  return (
    <div className="px-4 py-3 flex justify-between items-start gap-5 w-full flex-wrap border-2 border-gray-900">
        <div className='flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap'>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBold().run();
                }}
                className={`
                    ${editor.isActive("bold") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
            >
                <Bold className="w-5 h-5" />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleItalic().run();
                }}
                className={`
                    ${editor.isActive("italic") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
            >
                <Italic className="w-5 h-5" />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleStrike().run();
                }}
                className={`
                    ${editor.isActive("strike") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
            >
                <Strikethrough className="w-5 h-5" />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleHeading({ level: 2 }).run();
                }}
                className={`
                    ${editor.isActive("heading") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
            >
                <Heading2 className="w-5 h-5" />
            </button>
             <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBulletList().run();
                }}
                className={`
                    ${editor.isActive("bulletList") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
            >
                <List className="w-5 h-5" />
            </button>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleOrderedList().run();
                }}
                className={`
                    ${editor.isActive("orderedList") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
                >
                <ListOrdered className="w-5 h-5" />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleUnderline().run();
                }}
                className={`
                    ${editor.isActive("underline") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
                >
                <Underline className="w-5 h-5" />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleBlockquote().run();
                }}
                className={`
                    ${editor.isActive("blockquote") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
                >
                <Quote className="w-5 h-5" />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().undo().run();
                }}
                className={`
                    text-sky-400 p-2 rounded-xl transition-all duration-200 cursor-pointer
                `}
                >
                <Undo className="w-5 h-5" />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().redo().run();
                }}
                className={`
                    text-sky-400 p-2 rounded-xl transition-all duration-200 cursor-pointer
                `}
                >
                <Redo className="w-5 h-5" />
            </button>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    editor.chain().focus().toggleCodeBlock().run();
                }}
                className={`
                    ${editor.isActive("codeBlock") ? "bg-sky-700 text-white p-2 rounded-xl shadow-lg" : "text-sky-400 p-2 rounded-xl"}
                    transition-all duration-200 cursor-pointer
                `}
                >
                <Code className="w-5 h-5" />
            </button>
        </div>
        {content && (
            <button 
                type="submit"
                className="px-4 py-2 bg-sky-700 text-white rounded-xl"
            >
                Poster
            </button>
        )}
    </div>
  )
}

export default Toolbar