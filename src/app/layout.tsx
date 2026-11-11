import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header title="Task Manager" />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
