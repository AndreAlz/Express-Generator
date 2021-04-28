import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Masterclients } from "./Masterclients";

@Index("addresses_pkey", ["addressid"], { unique: true })
@Entity("addresses", { schema: "iprovider" })
export class Addresses {
  @Column("character varying", { primary: true, name: "addressid", length: 70 })
  addressid: string;

  @Column("character varying", {
    name: "countryid",
    nullable: true,
    length: 70,
  })
  countryid: string | null;

  @Column("character varying", { name: "cityid", nullable: true, length: 70 })
  cityid: string | null;

  @Column("character varying", {
    name: "districtid",
    nullable: true,
    length: 70,
  })
  districtid: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 200 })
  address: string | null;

  @Column("character varying", {
    name: "postalcode",
    nullable: true,
    length: 15,
  })
  postalcode: string | null;

  @ManyToOne(() => Masterclients, (masterclients) => masterclients.addresses)
  @JoinColumn([{ name: "clientid", referencedColumnName: "clientid" }])
  client: Masterclients;
}
