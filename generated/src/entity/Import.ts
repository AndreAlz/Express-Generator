import { Column, Entity, Index } from "typeorm";

@Index("import_pkey", ["importid"], { unique: true })
@Entity("import", { schema: "iprovider" })
export class Import {
  @Column("character varying", { primary: true, name: "importid", length: 70 })
  importid: string;

  @Column("character varying", { name: "col1", nullable: true, length: 2000 })
  col1: string | null;

  @Column("character varying", { name: "col2", nullable: true, length: 2000 })
  col2: string | null;

  @Column("character varying", { name: "col3", nullable: true, length: 2000 })
  col3: string | null;

  @Column("character varying", { name: "col4", nullable: true, length: 2000 })
  col4: string | null;

  @Column("character varying", { name: "col5", nullable: true, length: 2000 })
  col5: string | null;

  @Column("character varying", { name: "col6", nullable: true, length: 2000 })
  col6: string | null;

  @Column("character varying", { name: "col7", nullable: true, length: 2000 })
  col7: string | null;

  @Column("character varying", { name: "col8", nullable: true, length: 2000 })
  col8: string | null;

  @Column("character varying", { name: "col9", nullable: true, length: 2000 })
  col9: string | null;
}
