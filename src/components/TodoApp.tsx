"use client";

import type { Todo } from "@/types/todo";
import { useLocalStorage } from "@/utils/useLocalStorage";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text }]);
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text } : todo)),
    );
  };

  return (
    <div className="space-y-4">
      <TodoForm onAdd={addTodo} />

      {todos.length === 0 ? (
        <p className="py-6 text-center text-muted">Nothing here yet.</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
