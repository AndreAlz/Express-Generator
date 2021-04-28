import { Column, Entity, Index } from "typeorm";

@Index("audits_pkey", ["auditid"], { unique: true })
@Entity("audits", { schema: "iprovider" })
export class Audits {
  @Column("character varying", { primary: true, name: "auditid", length: 70 })
  auditid: string;

  @Column("character varying", { name: "typecol", nullable: true, length: 1 })
  typecol: string | null;

  @Column("character varying", {
    name: "tablename",
    nullable: true,
    length: 128,
  })
  tablename: string | null;

  @Column("text", { name: "primarykey", nullable: true })
  primarykey: string | null;

  @Column("character varying", {
    name: "fieldname",
    nullable: true,
    length: 128,
  })
  fieldname: string | null;

  @Column("text", { name: "oldvalue", nullable: true })
  oldvalue: string | null;

  @Column("text", { name: "newvalue", nullable: true })
  newvalue: string | null;

  @Column("timestamp with time zone", { name: "updatedate", nullable: true })
  updatedate: Date | null;

  @Column("character varying", {
    name: "username",
    nullable: true,
    length: 128,
  })
  username: string | null;
}
