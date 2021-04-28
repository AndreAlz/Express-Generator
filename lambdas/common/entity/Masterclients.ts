import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { Accountinggroups } from "./Accountinggroups";
import { Addresses } from "./Addresses";
import { Bankaccounts } from "./Bankaccounts";
import { Banks } from "./Banks";

@Index("masterclients_pkey", ["clientid"], { unique: true })
@Entity("masterclients", { schema: "iprovider" })
export class Masterclients {
  @Column("character varying", { primary: true, name: "clientid", length: 70 })
  clientid: string;

  @Column("character varying", {
    name: "clientcode",
    nullable: true,
    length: 3,
  })
  clientcode: string | null;

  @Column("character varying", {
    name: "clientname",
    nullable: true,
    length: 200,
  })
  clientname: string | null;

  @OneToOne(
    () => Accountinggroups,
    (accountinggroups) => accountinggroups.client
  )
  accountinggroups: Accountinggroups;

  @OneToMany(() => Addresses, (addresses) => addresses.client)
  addresses: Addresses[];

  @OneToMany(() => Bankaccounts, (bankaccounts) => bankaccounts.client)
  bankaccounts: Bankaccounts[];

  @OneToMany(() => Banks, (banks) => banks.client)
  banks: Banks[];
}
