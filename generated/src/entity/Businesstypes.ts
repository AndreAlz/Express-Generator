import { Column, Entity, Index } from "typeorm";

@Index("businesstypes_pkey", ["businesstypeid"], { unique: true })
@Entity("businesstypes", { schema: "iprovider" })
export class Businesstypes {
  @Column("character varying", {
    primary: true,
    name: "businesstypeid",
    length: 70,
  })
  businesstypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
