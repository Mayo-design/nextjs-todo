"use client";

import { useState } from "react";
import type { Filter, Todo } from "@/types/todo";
import { useLocalStorage } from "@/utils/useLocalStorage";
import FilterTabs from "./FilterTabs";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
  };

  const visible = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "done") return todo.done;
    return true;
  });

  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <div className="space-y-4">
      <TodoForm onAdd={addTodo} />

      <div className="flex items-center justify-between">
        <FilterTabs filter={filter} onChange={setFilter} />
        <p className="text-sm text-slate-600">{remaining} left</p>
      </div>

      {visible.length === 0 ? (
        <p className="py-6 text-center text-slate-500">Nothing here yet.</p>
      ) : (
        <ul className="space-y-2">
          {visible.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
