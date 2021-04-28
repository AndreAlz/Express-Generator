import { Column, Entity, Index } from "typeorm";

@Index("viewtypes_pkey", ["viewtypeid"], { unique: true })
@Entity("viewtypes", { schema: "iprovider" })
export class Viewtypes {
  @Column("character varying", {
    primary: true,
    name: "viewtypeid",
    length: 70,
  })
  viewtypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
