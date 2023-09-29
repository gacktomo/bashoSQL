"use client";
import { tablesAtom } from "@/state/atoms";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useRecoilState } from "recoil";

export default function TablePage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("name");
  const [tables, setTables] = useRecoilState(tablesAtom);
  const table = useMemo(
    () => tables.find((table) => table.name === search),
    [tables, search]
  );

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
            {Object.values(row).map((val) => (
              <div key={row.id} className="mr-2 text-lg">
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
