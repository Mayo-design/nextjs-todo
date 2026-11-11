"use client";

import { useState } from "react";
import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

export default function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);

  const save = () => {
    if (!draft.trim()) return;
    onEdit(todo.id, draft.trim());
    setEditing(false);
  };

  const cancel = () => {
    setDraft(todo.text);
    setEditing(false);
  };

  return (
    <li className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
      {editing ? (
        <>
          <input
            value={draft}
            autoFocus
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") save();
              if (e.key === "Escape") cancel();
            }}
            className="flex-1 rounded border border-border bg-background px-2 py-1 text-foreground outline-none focus:border-indigo-500"
          />
          <button
            type="button"
            onClick={save}
            className="text-sm font-medium text-indigo-400 hover:underline"
          >
            Save
          </button>
          <button
            type="button"
            onClick={cancel}
            className="text-sm text-muted hover:underline"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="flex-1 text-foreground">{todo.text}</span>
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="text-sm font-medium text-indigo-400 hover:underline"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            className="text-sm font-medium text-red-400 hover:underline"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
