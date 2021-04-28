import { Column, Entity, Index, JoinColumn, OneToOne } from "typeorm";
import { Masterclients } from "./Masterclients";

@Index("accountinggroups_pkey", ["clientid"], { unique: true })
@Entity("accountinggroups", { schema: "iprovider" })
export class Accountinggroups {
  @Column("character varying", { primary: true, name: "clientid", length: 70 })
  clientid: string;

  @Column("character varying", {
    name: "accountinggroupid",
    nullable: true,
    length: 70,
  })
  accountinggroupid: string | null;

  @Column("character varying", { name: "sapcode", nullable: true, length: 10 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @OneToOne(
    () => Masterclients,
    (masterclients) => masterclients.accountinggroups
  )
  @JoinColumn([{ name: "clientid", referencedColumnName: "clientid" }])
  client: Masterclients;
}
