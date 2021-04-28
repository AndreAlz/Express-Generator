import { Column, Entity, Index } from "typeorm";

@Index("testaccounts_pkey", ["id"], { unique: true })
@Entity("testaccounts", { schema: "iprovider" })
export class Testaccounts {
  @Column("character varying", { primary: true, name: "id", length: 70 })
  id: string;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("numeric", { name: "balance", precision: 15, scale: 2 })
  balance: string;
}
