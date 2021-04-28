import { Column, Entity, Index } from "typeorm";

@Index("contacttypes_pkey", ["contacttypeid"], { unique: true })
@Entity("contacttypes", { schema: "iprovider" })
export class Contacttypes {
  @Column("character varying", {
    primary: true,
    name: "contacttypeid",
    length: 70,
  })
  contacttypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
