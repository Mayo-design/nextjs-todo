type HeaderProps = {
  title: string;
  description?: string;
};

export default function Header({ title, description }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && <p className="text-muted">{description}</p>}
    </header>
  );
}
