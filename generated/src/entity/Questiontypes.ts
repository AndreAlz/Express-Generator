import { Column, Entity, Index } from "typeorm";

@Index("questiontypes_pkey", ["questiontypeid"], { unique: true })
@Entity("questiontypes", { schema: "iprovider" })
export class Questiontypes {
  @Column("character varying", {
    primary: true,
    name: "questiontypeid",
    length: 70,
  })
  questiontypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
