"use client";
import { useState } from "react";

interface Column {
  name: string;
  type: string;
}
interface Table {
  name: string;
  columns: Column[];
}

export default function Home() {
  const [tables, setTables] = useState<Table[]>([
    {
      name: "table1",
      columns: [
        { name: "id", type: "int" },
        { name: "name", type: "string" },
      ],
    },
    {
      name: "table2",
      columns: [
        { name: "id", type: "int" },
        { name: "name", type: "string" },
      ],
    },
  ]);
  return (
    <main className="flex min-h-screen flex-col p-4">
      <h2 className="text-3xl font-bold mb-2">Tables</h2>
      <div className="border-neutral-50 w-full border-2 p-4">
        <ul>
          {tables.map((table) => (
            <li key={table.name} className="mb-2">
              <h3 className="text-xl font-bold">{table.name}</h3>
              <ul>
                {table.columns.map((column) => (
                  <li key={column.name} className="text-lg">
                    {column.name} ({column.type})
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
