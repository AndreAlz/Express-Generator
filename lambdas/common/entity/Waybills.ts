import { Column, Entity, Index } from "typeorm";

@Index("waybills_pkey", ["waybillid"], { unique: true })
@Entity("waybills", { schema: "iprovider" })
export class Waybills {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "waybillid", length: 70 })
  waybillid: string;

  @Column("character varying", {
    name: "documentid",
    nullable: true,
    length: 70,
  })
  documentid: string | null;

  @Column("character varying", {
    name: "waybilltypeid",
    nullable: true,
    length: 70,
  })
  waybilltypeid: string | null;

  @Column("character varying", {
    name: "waybillsap",
    nullable: true,
    length: 200,
  })
  waybillsap: string | null;

  @Column("character varying", {
    name: "deliverypersonid",
    nullable: true,
    length: 70,
  })
  deliverypersonid: string | null;

  @Column("character varying", {
    name: "vehicleid",
    nullable: true,
    length: 70,
  })
  vehicleid: string | null;

  @Column("date", { name: "issuedate", nullable: true })
  issuedate: string | null;

  @Column("date", { name: "transportdate", nullable: true })
  transportdate: string | null;

  @Column("date", { name: "deliverydate", nullable: true })
  deliverydate: string | null;

  @Column("character varying", { name: "origin", nullable: true, length: 500 })
  origin: string | null;

  @Column("character varying", {
    name: "destination",
    nullable: true,
    length: 500,
  })
  destination: string | null;

  @Column("character varying", {
    name: "warehousename",
    nullable: true,
    length: 200,
  })
  warehousename: string | null;

  @Column("integer", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("integer", { name: "volume", nullable: true })
  volume: number | null;

  @Column("character varying", {
    name: "volumetypeid",
    nullable: true,
    length: 70,
  })
  volumetypeid: string | null;

  @Column("character varying", {
    name: "measuretypeid",
    nullable: true,
    length: 70,
  })
  measuretypeid: string | null;

  @Column("integer", { name: "netweight", nullable: true })
  netweight: number | null;

  @Column("integer", { name: "grossweight", nullable: true })
  grossweight: number | null;

  @Column("integer", { name: "tare", nullable: true })
  tare: number | null;
}
