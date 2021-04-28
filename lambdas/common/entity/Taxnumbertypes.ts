import { Column, Entity, Index } from "typeorm";

@Index("taxnumbertypes_pkey", ["taxnumbertypeid"], { unique: true })
@Entity("taxnumbertypes", { schema: "iprovider" })
export class Taxnumbertypes {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "taxnumbertypeid",
    length: 70,
  })
  taxnumbertypeid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 2 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
