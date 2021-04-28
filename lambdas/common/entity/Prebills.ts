import { Column, Entity, Index } from "typeorm";

@Index("prebills_pkey", ["prebillid"], { unique: true })
@Entity("prebills", { schema: "iprovider" })
export class Prebills {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "prebillid", length: 70 })
  prebillid: string;

  @Column("character varying", {
    name: "documentid",
    nullable: true,
    length: 70,
  })
  documentid: string | null;

  @Column("character varying", {
    name: "invoicetypeid",
    nullable: true,
    length: 70,
  })
  invoicetypeid: string | null;

  @Column("character varying", {
    name: "paymenttypeid",
    nullable: true,
    length: 70,
  })
  paymenttypeid: string | null;

  @Column("character varying", {
    name: "taxtypeid",
    nullable: true,
    length: 70,
  })
  taxtypeid: string | null;

  @Column("character varying", {
    name: "invoicenumber",
    nullable: true,
    length: 20,
  })
  invoicenumber: string | null;

  @Column("date", { name: "submissiondate", nullable: true })
  submissiondate: string | null;

  @Column("character varying", {
    name: "comprobantesunatid",
    nullable: true,
    length: 70,
  })
  comprobantesunatid: string | null;

  @Column("numeric", {
    name: "providertotalamount",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  providertotalamount: string | null;
}
