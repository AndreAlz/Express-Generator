import { Column, Entity, Index } from "typeorm";

@Index("rolestopermissions_pkey", ["rolestopermissionsid"], { unique: true })
@Entity("rolestopermissions", { schema: "iprovider" })
export class Rolestopermissions {
  @Column("character varying", {
    primary: true,
    name: "rolestopermissionsid",
    length: 70,
  })
  rolestopermissionsid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { name: "roleid", nullable: true, length: 70 })
  roleid: string | null;

  @Column("character varying", {
    name: "permissionid",
    nullable: true,
    length: 70,
  })
  permissionid: string | null;
}
