import { Column, Entity, Index } from "typeorm";

@Index("treasurygroups_pkey", ["treasurygroupid"], { unique: true })
@Entity("treasurygroups", { schema: "iprovider" })
export class Treasurygroups {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "treasurygroupid",
    length: 70,
  })
  treasurygroupid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 10 })
  sapcode: string | null;

  @Column("character varying", {
    name: "shortdescription",
    nullable: true,
    length: 25,
  })
  shortdescription: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
