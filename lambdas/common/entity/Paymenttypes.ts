import { Column, Entity, Index } from "typeorm";

@Index("paymenttypes_pkey", ["paymenttypeid"], { unique: true })
@Entity("paymenttypes", { schema: "iprovider" })
export class Paymenttypes {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "paymenttypeid",
    length: 70,
  })
  paymenttypeid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 1 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
