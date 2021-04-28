import { Column, Entity, Index } from "typeorm";

@Index("deductiontypes_pkey", ["deductiontypeid"], { unique: true })
@Entity("deductiontypes", { schema: "iprovider" })
export class Deductiontypes {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "deductiontypeid",
    length: 70,
  })
  deductiontypeid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 2 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
