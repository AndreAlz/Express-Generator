import { Column, Entity, Index } from "typeorm";

@Index("vehicles_pkey", ["vehicleid"], { unique: true })
@Entity("vehicles", { schema: "iprovider" })
export class Vehicles {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "vehicleid", length: 70 })
  vehicleid: string;

  @Column("character varying", {
    name: "transporttypeid",
    nullable: true,
    length: 70,
  })
  transporttypeid: string | null;

  @Column("character varying", { name: "plate", nullable: true, length: 10 })
  plate: string | null;

  @Column("character varying", {
    name: "registrycode",
    nullable: true,
    length: 20,
  })
  registrycode: string | null;
}
