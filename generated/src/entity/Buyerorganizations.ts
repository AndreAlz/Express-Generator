import { Column, Entity, Index, OneToMany } from "typeorm";
import { Biddings } from "./Biddings";
import { Costcentermaterial } from "./Costcentermaterial";

@Index("buyerorganizations_pkey", ["buyerorganizationid"], { unique: true })
@Entity("buyerorganizations", { schema: "iprovider" })
export class Buyerorganizations {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "buyerorganizationid",
    length: 70,
  })
  buyerorganizationid: string;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", { name: "sapcode", nullable: true, length: 4 })
  sapcode: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 250 })
  name: string | null;

  @OneToMany(() => Biddings, (biddings) => biddings.buyerorganization)
  biddings: Biddings[];

  @OneToMany(
    () => Costcentermaterial,
    (costcentermaterial) => costcentermaterial.buyerorganization
  )
  costcentermaterials: Costcentermaterial[];
}
