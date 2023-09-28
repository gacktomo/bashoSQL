import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <h1 className="text-6xl font-bold text-center mt-12 mb-12">
          {">"}BashoSQL{" "}
        </h1>
        {children}
      </body>
    </html>
  );
}
