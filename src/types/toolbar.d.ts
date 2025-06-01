import { type Editor } from "@tiptap/react";

export interface IToolbar {
    editor: Editor | null;
    content: string;
}