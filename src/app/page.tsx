import TodoApp from "@/components/TodoApp";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">My Todos</h1>
      <TodoApp />
    </main>
  );
}
