"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar';
import Underline from '@tiptap/extension-underline';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Tiptap = ({ onChange, content }: any) => {

	const handleChange = (newContent: string) => {
		onChange(newContent);
	};

	const editor = useEditor({
		extensions: 
			[StarterKit, Underline],
		editorProps: {
			attributes: {
				class:
					"flex flex-col px-4 justify-start border-b border-r border-l border-gray-800 text-gray-900 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-lg rounded-br-lg outline-none"
			},
		},
		onUpdate: ({ editor }) => {
			handleChange(editor.getHTML());
		}
	})

	return (
		<div className="w-full px-4">
			<Toolbar editor={editor} content={content} />
			<EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
		</div>
	)
}

export default Tiptap
