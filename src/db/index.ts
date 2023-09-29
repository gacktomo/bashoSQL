export class DB {
  static instance: DB;
  private tables: TableSchema[] = [];

  constructor() {
    if (DB.instance) {
      return DB.instance;
    }
    DB.instance = this;
  }

  exec(queries: Function[]) {
    const res = [];
    const startTime = Date.now();
    for (const query of queries) {
      res.push(query());
    }
    const time = Date.now() - startTime;
    console.log(time);
    return { res, time };
  }

  private _createTable(name: string, columns: ColumnSchema[]) {
    this.tables.push({
      name,
      columns,
      data: [],
    });
  }
  createTable(name: string, columns: ColumnSchema[]) {
    this.exec([() => this._createTable(name, columns)]);
  }

  showTables() {
    return this.tables;
  }

  select(tableName: string) {
    return this.tables.find((table) => table.name === tableName);
  }

  _insert(tableName: string, data: TableSchema["data"]) {
    const table = this.select(tableName);
    if (table) {
      for (const row of data) {
        table.data.push(row);
      }
    }
  }
  insert(tableName: string, data: TableSchema["data"]) {
    return this.exec([() => this._insert(tableName, data)]);
  }
}
