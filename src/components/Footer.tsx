export default function Footer() {
  return (
    <footer className="border-t border-border bg-card p-4 text-center text-sm text-muted">
      © {new Date().getFullYear()} Task Manager
    </footer>
  );
}
