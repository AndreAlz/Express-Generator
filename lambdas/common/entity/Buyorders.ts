import { Column, Entity, Index } from "typeorm";

@Index("buyorders_pkey", ["buyorderid"], { unique: true })
@Entity("buyorders", { schema: "iprovider" })
export class Buyorders {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "buyorderid",
    length: 70,
  })
  buyorderid: string;

  @Column("character varying", {
    name: "documentid",
    nullable: true,
    length: 70,
  })
  documentid: string | null;

  @Column("character varying", {
    name: "contactproviderpersonid",
    nullable: true,
    length: 70,
  })
  contactproviderpersonid: string | null;

  @Column("character varying", {
    name: "contactcompanypersonid",
    nullable: true,
    length: 70,
  })
  contactcompanypersonid: string | null;

  @Column("text", { name: "paymentperiod", nullable: true })
  paymentperiod: string | null;

  @Column("date", { name: "startcontractdate", nullable: true })
  startcontractdate: string | null;

  @Column("date", { name: "endcontractdate", nullable: true })
  endcontractdate: string | null;

  @Column("character varying", {
    name: "purchaserequisitionsap",
    nullable: true,
    length: 200,
  })
  purchaserequisitionsap: string | null;

  @Column("character varying", {
    name: "requestforquotationsap",
    nullable: true,
    length: 200,
  })
  requestforquotationsap: string | null;

  @Column("integer", { name: "version", nullable: true })
  version: number | null;

  @Column("integer", { name: "buyordertypeid" })
  buyordertypeid: number;
}
