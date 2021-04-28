import { Column, Entity, Index } from "typeorm";

@Index("quotations_pkey", ["quotationid"], { unique: true })
@Entity("quotations", { schema: "iprovider" })
export class Quotations {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "quotationid",
    length: 70,
  })
  quotationid: string;

  @Column("character varying", {
    name: "documentid",
    nullable: true,
    length: 70,
  })
  documentid: string | null;

  @Column("date", { name: "closingdate", nullable: true })
  closingdate: string | null;

  @Column("character varying", {
    name: "fileattachedid",
    nullable: true,
    length: 70,
  })
  fileattachedid: string | null;

  @Column("date", { name: "deliverydate", nullable: true })
  deliverydate: string | null;

  @Column("boolean", { name: "surveyanswered", nullable: true })
  surveyanswered: boolean | null;
}
