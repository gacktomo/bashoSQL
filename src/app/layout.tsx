import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BashoSQL",
  description: "BashoSQL is a SQL database written in Basho.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col p-8 md:px-36 xl:px-72">
          <Link href="/">
            <h1 className="text-6xl font-bold text-center mt-12 mb-12">
              {">"}BashoSQL{" "}
            </h1>
          </Link>
          {children}
        </main>
      </body>
    </html>
  );
}
