"use client";

import { X } from "lucide-react";
import ModalPortal from "./ModalPortal";
import { useModalStore } from "@/lib/stores/modalStore";


export default function Modal() {

    const { isOpen, message, closeModal } = useModalStore();

  	if (!isOpen) return null;

	return (
		<ModalPortal>
			<div
				className="fixed inset-0 bg-gray-400/10 backdrop-blur-sm flex items-center justify-center z-[1000000]"
				onClick={closeModal}
			>
				<div
					className="relative z-[1000000] bg-gradient-to-br from-purple-600 to-indigo-900 text-purple-100 cursor-pointer text-base xl:text-xl text-text-1 font-black rounded-3xl py-20 px-10 border-2 border-purple-800 max-w-lg w-2/3 shadow-2xl shadow-gray-800"
					onClick={(e) => e.stopPropagation()}
				>
					<X className="absolute right-2 top-2 stroke-3 text-text-1 hover:scale-110 hover:text-red-400 transition-all duration-400" onClick={closeModal} />
					<p className="text-center">{message}</p>
				</div>
			</div>
		</ModalPortal>
	);
}