import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Costcenter } from "./Costcenter";
import { Buyerorganizations } from "./Buyerorganizations";
import { Documentitems } from "./Documentitems";
import { Warehouses } from "./Warehouses";

@Index("costcentermaterial_pkey", ["costcentermaterialid"], { unique: true })
@Entity("costcentermaterial", { schema: "iprovider" })
export class Costcentermaterial {
  @Column("character varying", {
    primary: true,
    name: "costcentermaterialid",
    length: 70,
  })
  costcentermaterialid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { name: "sapid", nullable: true, length: 4 })
  sapid: string | null;

  @Column("character varying", { name: "nombre", nullable: true, length: 200 })
  nombre: string | null;

  @Column("character varying", {
    name: "direccion",
    nullable: true,
    length: 300,
  })
  direccion: string | null;

  @Column("character varying", {
    name: "poblacion",
    nullable: true,
    length: 100,
  })
  poblacion: string | null;

  @OneToMany(() => Costcenter, (costcenter) => costcenter.costcentermaterial)
  costcenters: Costcenter[];

  @ManyToOne(
    () => Buyerorganizations,
    (buyerorganizations) => buyerorganizations.costcentermaterials
  )
  @JoinColumn([
    {
      name: "buyerorganizationid",
      referencedColumnName: "buyerorganizationid",
    },
  ])
  buyerorganization: Buyerorganizations;

  @OneToMany(
    () => Documentitems,
    (documentitems) => documentitems.costcentermaterial
  )
  documentitems: Documentitems[];

  @OneToMany(() => Warehouses, (warehouses) => warehouses.costcentermaterial)
  warehouses: Warehouses[];
}
