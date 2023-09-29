"use client";
import { DB } from "@/db";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Home() {
  const [tables, setTables] = useState<TableSchema[]>(new DB().showTables());

  const createSample = useCallback(() => {
    const db = new DB();
    db.createTable("users", [
      { name: "id", type: "int" },
      { name: "name", type: "string" },
    ]);
    db.createTable("posts", [
      { name: "id", type: "int" },
      { name: "title", type: "string" },
    ]);
    db.insert(
      "users",
      Array(1000)
        .fill(null)
        .map((_, i) => ({ id: i + 1, name: "John" }))
    );
    db.insert("posts", [
      { id: 1, title: "Hello" },
      { id: 2, title: "World" },
    ]);
    setTables([...db.showTables()]);
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-8">
      <h2 className="text-3xl font-bold mb-4">Tables</h2>
      {!tables.length ? (
        <div className="">
          <p className="mb-8">No tables.</p>
          <div className="flex justify-center">
            <button
              className="border-neutral-50  border-2 p-2 min-w-[200px]"
              onClick={createSample}
            >
              Create sample tables
            </button>
          </div>
        </div>
      ) : (
        <div>
          {tables.map((table) => (
            <div
              key={table.name}
              className="border-neutral-50  border-2 mb-2 p-2"
            >
              <Link href={`/tables?name=${table.name}`}>
                <h3 className="text-xl font-bold">{table.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
