import { Column, Entity, Index } from "typeorm";

@Index("transporttypes_pkey", ["transporttypeid"], { unique: true })
@Entity("transporttypes", { schema: "iprovider" })
export class Transporttypes {
  @Column("character varying", {
    primary: true,
    name: "transporttypeid",
    length: 70,
  })
  transporttypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
