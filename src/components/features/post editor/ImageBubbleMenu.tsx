"use client";

import React, { useEffect, useState } from "react";
import { Editor } from "@tiptap/react";
import { NodeSelection } from "prosemirror-state";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface Props {
  	editor: Editor | null; 	
}

const ImageBubbleMenu: React.FC<Props> = ({ editor }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState<DOMRect | null>(null);

	useEffect(() => {
		if (!editor) {
			setIsVisible(false);
			setPosition(null);
			return;
		}

		const update = () => {
			const { state, view, isActive } = editor;
			const { selection } = state;

			if (
				!isActive("image") ||
				!(selection instanceof NodeSelection) ||
				selection.node.type.name !== "image"
			) {
				setIsVisible(false);
				setPosition(null);
				return;
			}

			const dom = view.nodeDOM(selection.from) as HTMLElement | null;
			if (dom) {
				const rect = dom.getBoundingClientRect();
				setPosition(rect);
				setIsVisible(true);
			} else {
				setIsVisible(false);
				setPosition(null);
			}
		};

		editor.on("selectionUpdate", update);
		editor.on("transaction", update);

		update();

		return () => {
			editor.off("selectionUpdate", update);
			editor.off("transaction", update);
		};
  	}, [editor]);

	if (!editor || !isVisible || !position) return null;

	const updateImageClass = (className: string) => {
		const { selection } = editor.state;

		if (
		selection instanceof NodeSelection &&
		selection.node.type.name === "image"
		) {
		const nodePos = selection.from;

		editor
			.chain()
			.focus()
			.setNodeSelection(nodePos)
			.updateAttributes("image", { class: className })
			.run();
		}
	};

	return (
		<Tippy
			visible={true}
			content={
				<div className="bg-white text-gray-600 font-bold border border-gray-300 rounded shadow-md p-2 flex gap-2">
				<button
					className="cursor-pointer bg-gray-300 rounded-lg p-1 shadow-gray-500 shadow-md"
					onClick={() => updateImageClass("float-left w-1/2 mr-2")}
				>
					Gauche
				</button>
				<button
					className="cursor-pointer bg-gray-300 rounded-lg p-1 shadow-gray-500 shadow-md"
					onClick={() => updateImageClass("mx-auto block w-1/2")}
				>
					Centré
				</button>
				<button
					className="cursor-pointer bg-gray-300 rounded-lg p-1 shadow-gray-500 shadow-md"
					onClick={() => updateImageClass("float-right w-1/2 ml-2")}
				>
					Droite
				</button>
				<button
					className="cursor-pointer bg-gray-300 rounded-lg p-1 shadow-gray-500 shadow-md"
					onClick={() => updateImageClass("w-full block")}
				>
					Pleine largeur
				</button>
				</div>
			}
			getReferenceClientRect={() => position}
			placement="top"
			arrow={false}
			interactive={true}
			>
			<span />
		</Tippy>
	);
};

export default ImageBubbleMenu;

