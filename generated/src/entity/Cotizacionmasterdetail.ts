import { Column, Entity, Index } from "typeorm";

@Index("cotizacionmasterdetail_pkey", ["cotizaciondetailid"], { unique: true })
@Entity("cotizacionmasterdetail", { schema: "iprovider" })
export class Cotizacionmasterdetail {
  @Column("character varying", {
    primary: true,
    name: "cotizaciondetailid",
    length: 70,
  })
  cotizaciondetailid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "cotizacionid",
    nullable: true,
    length: 70,
  })
  cotizacionid: string | null;

  @Column("character varying", {
    name: "licitacionmasterdetailid",
    nullable: true,
    length: 70,
  })
  licitacionmasterdetailid: string | null;

  @Column("numeric", {
    name: "unitprice",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  unitprice: string | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 500,
  })
  comments: string | null;
}
