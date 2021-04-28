import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Masterclients } from "./Masterclients";

@Index("bankaccounts_pkey", ["bankaccountid"], { unique: true })
@Entity("bankaccounts", { schema: "iprovider" })
export class Bankaccounts {
  @Column("character varying", {
    primary: true,
    name: "bankaccountid",
    length: 70,
  })
  bankaccountid: string;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", { name: "bankid", nullable: true, length: 70 })
  bankid: string | null;

  @Column("character varying", {
    name: "accounttypeid",
    nullable: true,
    length: 70,
  })
  accounttypeid: string | null;

  @Column("character varying", {
    name: "currencyid",
    nullable: true,
    length: 70,
  })
  currencyid: string | null;

  @Column("character varying", {
    name: "accountnumber",
    nullable: true,
    length: 100,
  })
  accountnumber: string | null;

  @Column("character varying", { name: "aba", nullable: true, length: 50 })
  aba: string | null;

  @Column("character varying", { name: "cci", nullable: true, length: 50 })
  cci: string | null;

  @Column("character varying", { name: "iban", nullable: true, length: 50 })
  iban: string | null;

  @Column("character varying", { name: "swift", nullable: true, length: 50 })
  swift: string | null;

  @Column("character varying", { name: "clabe", nullable: true, length: 50 })
  clabe: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 250 })
  address: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 250 })
  city: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 70 })
  country: string | null;

  @Column("character varying", {
    name: "bankintermediary",
    nullable: true,
    length: 250,
  })
  bankintermediary: string | null;

  @Column("character varying", {
    name: "bankintermediarycity",
    nullable: true,
    length: 250,
  })
  bankintermediarycity: string | null;

  @Column("integer", { name: "bankintermediarycountry", nullable: true })
  bankintermediarycountry: number | null;

  @ManyToOne(() => Masterclients, (masterclients) => masterclients.bankaccounts)
  @JoinColumn([{ name: "clientid", referencedColumnName: "clientid" }])
  client: Masterclients;
}
