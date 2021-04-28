import { Column, Entity, Index } from "typeorm";

@Index("supplierconfidentiality_pkey", ["supplierconfidentialityid"], {
  unique: true,
})
@Entity("supplierconfidentiality", { schema: "iprovider" })
export class Supplierconfidentiality {
  @Column("character varying", {
    primary: true,
    name: "supplierconfidentialityid",
    length: 70,
  })
  supplierconfidentialityid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "supplierid",
    nullable: true,
    length: 70,
  })
  supplierid: string | null;

  @Column("integer", { name: "accept", nullable: true })
  accept: number | null;
}
