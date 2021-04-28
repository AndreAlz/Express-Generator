import { Column, Entity, Index } from "typeorm";

@Index("volumetypes_pkey", ["volumetypeid"], { unique: true })
@Entity("volumetypes", { schema: "iprovider" })
export class Volumetypes {
  @Column("character varying", {
    primary: true,
    name: "volumetypeid",
    length: 70,
  })
  volumetypeid: string;

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
