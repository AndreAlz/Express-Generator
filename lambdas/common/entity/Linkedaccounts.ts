import { Column, Entity, Index } from "typeorm";

@Index("linkedaccounts_pkey", ["linkedaccountid"], { unique: true })
@Entity("linkedaccounts", { schema: "iprovider" })
export class Linkedaccounts {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "linkedaccountid",
    length: 70,
  })
  linkedaccountid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 20 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
