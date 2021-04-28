import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Costcentermaterial } from "./Costcentermaterial";

@Index("warehouses_pkey", ["warehouseid"], { unique: true })
@Entity("warehouses", { schema: "iprovider" })
export class Warehouses {
  @Column("character varying", {
    primary: true,
    name: "warehouseid",
    length: 70,
  })
  warehouseid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { name: "sapid", nullable: true, length: 4 })
  sapid: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 150 })
  name: string | null;

  @ManyToOne(
    () => Costcentermaterial,
    (costcentermaterial) => costcentermaterial.warehouses
  )
  @JoinColumn([
    {
      name: "costcentermaterialid",
      referencedColumnName: "costcentermaterialid",
    },
  ])
  costcentermaterial: Costcentermaterial;
}
