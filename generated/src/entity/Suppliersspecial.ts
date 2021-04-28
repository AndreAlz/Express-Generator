import { Column, Entity, Index } from "typeorm";

@Index("suppliersspecial_pkey", ["suppliersspecialid"], { unique: true })
@Entity("suppliersspecial", { schema: "iprovider" })
export class Suppliersspecial {
  @Column("character varying", {
    primary: true,
    name: "suppliersspecialid",
    length: 70,
  })
  suppliersspecialid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "supplierid",
    nullable: true,
    length: 70,
  })
  supplierid: string | null;
}
