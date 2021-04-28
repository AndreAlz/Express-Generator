import { Column, Entity, Index } from "typeorm";

@Index("incoterms_pkey", ["incotermid"], { unique: true })
@Entity("incoterms", { schema: "iprovider" })
export class Incoterms {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "incotermid",
    length: 70,
  })
  incotermid: string;

  @Column("character varying", { name: "incoterm", nullable: true, length: 3 })
  incoterm: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
