import { Column, Entity, Index } from "typeorm";

@Index("apppermissions_pkey", ["permissionid"], { unique: true })
@Entity("apppermissions", { schema: "iprovider" })
export class Apppermissions {
  @Column("character varying", {
    primary: true,
    name: "permissionid",
    length: 70,
  })
  permissionid: string;

  @Column("character varying", {
    name: "modulename",
    nullable: true,
    length: 50,
  })
  modulename: string | null;

  @Column("character varying", {
    name: "longdescription",
    nullable: true,
    length: 500,
  })
  longdescription: string | null;

  @Column("character varying", { name: "viewid", nullable: true, length: 70 })
  viewid: string | null;
}
