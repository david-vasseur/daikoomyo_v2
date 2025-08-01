"use client"

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import FileHandler from '@tiptap/extension-file-handler';
import Image from '@tiptap/extension-image';
import BubbleMenuExtension from '@tiptap/extension-bubble-menu';

import "../../../../components/features/post editor/PostEditor.css";
import PostMenuBar from '@/components/features/post editor/PostMenuBar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function NewsEditor({ onUpdate }: { onUpdate: (html: string) => void }) {

	const editor = useEditor({
		extensions: [
		StarterKit,
		Image.configure({
			HTMLAttributes: {
			class: 'w-full max-h-[25vh] object-cover',
			},
		}),
		BubbleMenuExtension,
		Underline.configure({
			HTMLAttributes: {
			class: "underline decoration-3 decoration-violet-500"
			}
		}),
		TextAlign.configure({
			types: ['heading', 'paragraph'],
		}),
		FileHandler.configure({
		allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif'],
		onDrop: async (editor, files) => {
			const file = files[0];
			if (!file.type.startsWith('image/')) return;

			const reader = new FileReader();
			reader.onload = () => {
			const src = reader.result as string;
			editor
				.chain()
				.focus()
				.setImage({ src })
				.run();
			};
			reader.readAsDataURL(file);
		},
		}),
		],
		content: 'Rediger ici...',
		editorProps: {
		attributes: {
			class: 'p-4 rounded-xl border-gray-400 border-2 w-[80vw] min-h-[40vh] shadow-gray-500 shadow-lg',
		}
		},
		immediatelyRender: false,
		onUpdate({ editor }) {
			const htmlContent = editor.getHTML();
			onUpdate(htmlContent);
		}
	})

	return (
		<>
		<PostMenuBar editor={editor} />
		<EditorContent editor={editor} className='post-editor' />
		</>
	)
}

export default NewsEditor;