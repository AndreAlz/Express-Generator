import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { Comprobantesprocesados } from "./Comprobantesprocesados";
import { Linkmigocomprobante } from "./Linkmigocomprobante";

@Index("comprobantessunat_pkey", ["idregistro"], { unique: true })
@Entity("comprobantessunat", { schema: "iprovider" })
export class Comprobantessunat {
  @Column("character varying", {
    primary: true,
    name: "idregistro",
    length: 70,
  })
  idregistro: string;

  @Column("timestamp with time zone", { name: "fechahora", nullable: true })
  fechahora: Date | null;

  @Column("character varying", {
    name: "tipodocemisor",
    nullable: true,
    length: 10,
  })
  tipodocemisor: string | null;

  @Column("character varying", {
    name: "rucemisor",
    nullable: true,
    length: 20,
  })
  rucemisor: string | null;

  @Column("character varying", {
    name: "nombreemisor",
    nullable: true,
    length: 500,
  })
  nombreemisor: string | null;

  @Column("character varying", { name: "serie", nullable: true, length: 50 })
  serie: string | null;

  @Column("character varying", {
    name: "tipodocumento",
    nullable: true,
    length: 10,
  })
  tipodocumento: string | null;

  @Column("integer", { name: "correlativo", nullable: true })
  correlativo: number | null;

  @Column("date", { name: "fechaemision", nullable: true })
  fechaemision: string | null;

  @Column("timestamp with time zone", { name: "fechacreacion", nullable: true })
  fechacreacion: Date | null;

  @Column("character varying", {
    name: "tipomoneda",
    nullable: true,
    length: 10,
  })
  tipomoneda: string | null;

  @Column("numeric", {
    name: "mnatotal",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  mnatotal: string | null;

  @Column("character varying", {
    name: "estadodocumento",
    nullable: true,
    length: 5,
  })
  estadodocumento: string | null;

  @Column("text", { name: "xmldata", nullable: true })
  xmldata: string | null;

  @Column("text", { name: "xmlstring", nullable: true })
  xmlstring: string | null;

  @Column("text", { name: "pdf", nullable: true })
  pdf: string | null;

  @Column("character varying", {
    name: "rucsociedad",
    nullable: true,
    length: 30,
  })
  rucsociedad: string | null;

  @Column("character varying", {
    name: "clavecomprobante",
    nullable: true,
    length: 124,
  })
  clavecomprobante: string | null;

  @OneToMany(
    () => Comprobantesprocesados,
    (comprobantesprocesados) => comprobantesprocesados.idregistro
  )
  comprobantesprocesados: Comprobantesprocesados[];

  @OneToOne(
    () => Linkmigocomprobante,
    (linkmigocomprobante) => linkmigocomprobante.idregistro2
  )
  linkmigocomprobante: Linkmigocomprobante;
}
