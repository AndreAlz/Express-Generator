import { Column, Entity, Index } from "typeorm";

@Index("suppliertypes_pkey", ["suppliertypeid"], { unique: true })
@Entity("suppliertypes", { schema: "iprovider" })
export class Suppliertypes {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "suppliertypeid",
    length: 70,
  })
  suppliertypeid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 2 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
