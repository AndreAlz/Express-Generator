import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Costcentermaterial } from "./Costcentermaterial";

@Index("costcenter_pkey", ["idcostcenter"], { unique: true })
@Entity("costcenter", { schema: "iprovider" })
export class Costcenter {
  @Column("character varying", {
    primary: true,
    name: "idcostcenter",
    length: 70,
  })
  idcostcenter: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "costcentercode",
    nullable: true,
    length: 50,
  })
  costcentercode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @ManyToOne(
    () => Costcentermaterial,
    (costcentermaterial) => costcentermaterial.costcenters
  )
  @JoinColumn([
    {
      name: "costcentermaterialid",
      referencedColumnName: "costcentermaterialid",
    },
  ])
  costcentermaterial: Costcentermaterial;
}
