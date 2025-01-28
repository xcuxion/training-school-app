"use client";

import { useEditor, EditorContent,  } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Toolbar } from "./Toolbar";
import Heading from "@tiptap/extension-heading"
const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richtext: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure({
    }), Heading.configure({
      HTMLAttributes: {
        class: "text-xl font-bold",
        levels: [2],
      }
    })],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-80 border-outline p-4 ",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML())
    },
  });

  return (
    <div className="">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
