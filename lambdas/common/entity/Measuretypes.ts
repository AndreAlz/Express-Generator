import { Column, Entity, Index } from "typeorm";

@Index("measuretypes_pkey", ["measuretypeid"], { unique: true })
@Entity("measuretypes", { schema: "iprovider" })
export class Measuretypes {
  @Column("character varying", {
    primary: true,
    name: "measuretypeid",
    length: 70,
  })
  measuretypeid: string;

  @Column("character varying", {
    name: "shortdescription",
    nullable: true,
    length: 10,
  })
  shortdescription: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 50,
  })
  description: string | null;
}
