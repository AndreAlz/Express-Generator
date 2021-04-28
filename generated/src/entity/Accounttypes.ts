import { Column, Entity, Index } from "typeorm";

@Index("accounttypes_pkey", ["accounttypeid"], { unique: true })
@Entity("accounttypes", { schema: "iprovider" })
export class Accounttypes {
  @Column("character varying", {
    primary: true,
    name: "accounttypeid",
    length: 70,
  })
  accounttypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
