import { Column, Entity, Index } from "typeorm";

@Index("deductionindicators_pkey", ["deductionindicatorid"], { unique: true })
@Entity("deductionindicators", { schema: "iprovider" })
export class Deductionindicators {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "deductionindicatorid",
    length: 70,
  })
  deductionindicatorid: string;

  @Column("character varying", {
    name: "deductiontypeid",
    nullable: true,
    length: 70,
  })
  deductiontypeid: string | null;

  @Column("character varying", { name: "sapcode", nullable: true, length: 2 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
