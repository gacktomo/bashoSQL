interface ColumnSchema {
  name: string;
  type: string;
}
interface TableSchema {
  name: string;
  columns: ColumnSchema[];
  data: Record<string, number | string | undefined>[];
}
