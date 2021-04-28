import { Column, Entity, Index } from "typeorm";

@Index("contribuyentesunat_pkey", ["contribuyentesunatid"], { unique: true })
@Entity("contribuyentesunat", { schema: "iprovider" })
export class Contribuyentesunat {
  @Column("character varying", {
    primary: true,
    name: "contribuyentesunatid",
    length: 70,
  })
  contribuyentesunatid: string;

  @Column("character varying", { name: "ruc", nullable: true, length: 11 })
  ruc: string | null;

  @Column("character varying", {
    name: "razonsocial",
    nullable: true,
    length: 200,
  })
  razonsocial: string | null;

  @Column("character varying", { name: "estado", nullable: true, length: 100 })
  estado: string | null;

  @Column("character varying", {
    name: "condiciondomicilio",
    nullable: true,
    length: 50,
  })
  condiciondomicilio: string | null;

  @Column("character varying", { name: "ubigeo", nullable: true, length: 10 })
  ubigeo: string | null;

  @Column("character varying", { name: "tipovia", nullable: true, length: 10 })
  tipovia: string | null;

  @Column("character varying", {
    name: "nombrevia",
    nullable: true,
    length: 100,
  })
  nombrevia: string | null;

  @Column("character varying", {
    name: "codigozona",
    nullable: true,
    length: 20,
  })
  codigozona: string | null;

  @Column("character varying", { name: "tipozona", nullable: true, length: 50 })
  tipozona: string | null;

  @Column("character varying", { name: "numero", nullable: true, length: 50 })
  numero: string | null;

  @Column("character varying", { name: "interior", nullable: true, length: 20 })
  interior: string | null;

  @Column("character varying", { name: "lote", nullable: true, length: 20 })
  lote: string | null;

  @Column("character varying", {
    name: "departamento",
    nullable: true,
    length: 100,
  })
  departamento: string | null;

  @Column("character varying", { name: "manzana", nullable: true, length: 20 })
  manzana: string | null;

  @Column("character varying", {
    name: "kilometro",
    nullable: true,
    length: 100,
  })
  kilometro: string | null;
}
