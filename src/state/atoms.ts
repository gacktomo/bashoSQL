import { atom } from "recoil";

export const tablesAtom = atom<TableSchema[]>({
  key: "tablesAtom",
  default: [],
});
