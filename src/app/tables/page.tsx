"use client";
import { DB } from "@/db";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function TablePage() {
  const searchParams = useSearchParams();
  const tableName = searchParams.get("name") ?? "";
  const [table] = useState(new DB().select(tableName));

  if (!table) {
    return (
      <main className="flex min-h-screen flex-col p-8">
        <h2 className="text-3xl font-bold mb-4">Table not found</h2>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h2 className="text-4xl font-bold mb-4">{table?.name}</h2>
      <h2 className="text-xl font-bold mb-2">Schema</h2>
      <div className="border-neutral-50 w-full border-2 p-2 mb-6">
        {table.columns.map((column) => (
          <div key={column.name} className="text-lg">
            {column.name} ({column.type})
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-2">Data</h2>
      <div className="border-neutral-50 w-full border-2 p-2">
        {table.data.map((row) => (
          <div key={row.id} className="flex">
            {Object.entries(row).map(([col, val]) => (
              <div key={col} className="mr-2 text-lg">
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
