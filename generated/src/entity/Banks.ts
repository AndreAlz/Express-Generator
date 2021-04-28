import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Masterclients } from "./Masterclients";

@Index("banks_pkey", ["bankid"], { unique: true })
@Entity("banks", { schema: "iprovider" })
export class Banks {
  @Column("character varying", { primary: true, name: "bankid", length: 70 })
  bankid: string;

  @Column("character varying", {
    name: "countryid",
    nullable: true,
    length: 70,
  })
  countryid: string | null;

  @Column("character varying", { name: "sapcode", nullable: true, length: 10 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @ManyToOne(() => Masterclients, (masterclients) => masterclients.banks)
  @JoinColumn([{ name: "clientid", referencedColumnName: "clientid" }])
  client: Masterclients;
}
