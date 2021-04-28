import { Column, Entity, Index } from "typeorm";

@Index("licitacionevents_pkey", ["eventid"], { unique: true })
@Entity("licitacionevents", { schema: "iprovider" })
export class Licitacionevents {
  @Column("character varying", { primary: true, name: "eventid", length: 70 })
  eventid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "licitacionmasterid",
    nullable: true,
    length: 70,
  })
  licitacionmasterid: string | null;

  @Column("character varying", {
    name: "nombreevento",
    nullable: true,
    length: 200,
  })
  nombreevento: string | null;

  @Column("timestamp with time zone", { name: "finicio", nullable: true })
  finicio: Date | null;

  @Column("timestamp with time zone", { name: "ffin", nullable: true })
  ffin: Date | null;

  @Column("character varying", { name: "tagcolor", nullable: true, length: 30 })
  tagcolor: string | null;

  @Column("boolean", { name: "active", nullable: true })
  active: boolean | null;

  @Column("boolean", {
    name: "cierraofertas",
    nullable: true,
    default: () => "false",
  })
  cierraofertas: boolean | null;
}
