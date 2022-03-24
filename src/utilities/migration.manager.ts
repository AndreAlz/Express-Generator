import { TableColumn } from "typeorm";

export const listAddColumns = async (qr, list, t) => {
  var listAddColumns = [];
  for (var j = 0; j < list.length; j++) {
    var c = list[j];
    var has = await qr.hasColumn(t, c.columnName);
    if (!has) {
      if (c.columnType === "varchar") {
        var tc = new TableColumn();
        tc.type = c.columnType;
        tc.length = c.length;
        tc.name = c.columnName;
        tc.isNullable = c.isNull;
        listAddColumns.push(tc);
      }
      if (c.columnType === "timestamp") {
        var tc = new TableColumn();
        tc.type = c.columnType;
        tc.name = c.columnName;
        tc.isNullable = c.isNull;
        listAddColumns.push(tc);
      }
    }
  }
  return listAddColumns;
};
