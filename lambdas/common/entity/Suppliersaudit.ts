import { Column, Entity, Index } from "typeorm";

@Index("suppliersaudit_pkey", ["suppliersauditid"], { unique: true })
@Entity("suppliersaudit", { schema: "iprovider" })
export class Suppliersaudit {
  @Column("character varying", {
    primary: true,
    name: "suppliersauditid",
    length: 70,
  })
  suppliersauditid: string;

  @Column("character varying", { name: "auditid", nullable: true, length: 70 })
  auditid: string | null;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "supplierid",
    nullable: true,
    length: 70,
  })
  supplierid: string | null;

  @Column("character varying", {
    name: "supplierstatusid",
    nullable: true,
    length: 70,
  })
  supplierstatusid: string | null;

  @Column("character varying", { name: "type", nullable: true, length: 1 })
  type: string | null;

  @Column("text", { name: "comments", nullable: true })
  comments: string | null;

  @Column("timestamp with time zone", { name: "date", nullable: true })
  date: Date | null;

  @Column("character varying", {
    name: "username",
    nullable: true,
    length: 128,
  })
  username: string | null;
}
