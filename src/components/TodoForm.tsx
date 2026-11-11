"use client";

import { useState } from "react";

type TodoFormProps = {
  onAdd: (text: string) => void;
};

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="What needs to be done?"
        className="flex-1 rounded-lg border border-border bg-card px-4 py-2 text-foreground outline-none placeholder:text-muted focus:border-indigo-500"
      />
      <button
        type="button"
        onClick={submit}
        className="rounded-lg bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-500"
      >
        Add
      </button>
    </div>
  );
}
