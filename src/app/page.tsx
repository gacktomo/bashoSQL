"use client";
import { tablesAtom } from "@/state/atoms";
import Link from "next/link";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [tables, setTables] = useRecoilState(tablesAtom);

  const createSample = useCallback(() => {
    const tableSamples = [
      {
        name: "users",
        columns: [
          { name: "id", type: "int" },
          { name: "name", type: "string" },
        ],
        data: [
          { id: 1, name: "John" },
          { id: 2, name: "Jane" },
        ],
      },
      {
        name: "posts",
        columns: [
          { name: "id", type: "int" },
          { name: "title", type: "string" },
        ],
        data: [
          { id: 1, title: "Hello" },
          { id: 2, title: "World" },
        ],
      },
    ];
    setTables(tableSamples);
  }, [setTables]);

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
