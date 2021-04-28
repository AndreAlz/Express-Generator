import { Column, Entity, Index } from "typeorm";

@Index("roles_pkey", ["roleid"], { unique: true })
@Entity("roles", { schema: "iprovider" })
export class Roles {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "roleid", length: 70 })
  roleid: string;

  @Column("character varying", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("boolean", { name: "specialrole", nullable: true })
  specialrole: boolean | null;

  @Column("boolean", { name: "enabled", nullable: true, default: () => "true" })
  enabled: boolean | null;

  @Column("boolean", {
    name: "escomprador",
    nullable: true,
    default: () => "false",
  })
  escomprador: boolean | null;
}
