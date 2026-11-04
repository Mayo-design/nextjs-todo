"use client";

import { useState } from "react";
import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
};

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) {
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
    <li className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        className="h-4 w-4 accent-indigo-600"
      />

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
            className="flex-1 rounded border border-slate-300 px-2 py-1 outline-none focus:border-indigo-500"
          />
          <button
            type="button"
            onClick={save}
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            Save
          </button>
          <button
            type="button"
            onClick={cancel}
            className="text-sm text-slate-500 hover:underline"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 ${
              todo.done ? "text-slate-400 line-through" : "text-slate-900"
            }`}
          >
            {todo.text}
          </span>
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="text-sm font-medium text-indigo-600 hover:underline"
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            className="text-sm font-medium text-red-600 hover:underline"
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}
