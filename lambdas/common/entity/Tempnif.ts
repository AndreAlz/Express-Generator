import { Column, Entity, Index } from "typeorm";

@Index("tempnif_pkey", ["tempnifid"], { unique: true })
@Entity("tempnif", { schema: "iprovider" })
export class Tempnif {
  @Column("character varying", { primary: true, name: "tempnifid", length: 70 })
  tempnifid: string;

  @Column("character varying", { name: "acreedor", nullable: true, length: 70 })
  acreedor: string | null;

  @Column("character varying", { name: "nif", nullable: true, length: 10 })
  nif: string | null;
}
