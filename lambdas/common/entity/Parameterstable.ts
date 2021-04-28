import { Column, Entity, Index } from "typeorm";

@Index("parameterstable_pkey", ["idparameter"], { unique: true })
@Entity("parameterstable", { schema: "iprovider" })
export class Parameterstable {
  @Column("character varying", {
    primary: true,
    name: "idparameter",
    length: 70,
  })
  idparameter: string;

  @Column("character varying", { name: "idtable", nullable: true, length: 70 })
  idtable: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 250 })
  name: string | null;

  @Column("character varying", { name: "keyname", nullable: true, length: 50 })
  keyname: string | null;

  @Column("text", { name: "value", nullable: true })
  value: string | null;

  @Column("boolean", { name: "istable", nullable: true })
  istable: boolean | null;
}
