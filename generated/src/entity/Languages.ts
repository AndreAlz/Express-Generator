import { Column, Entity, Index } from "typeorm";

@Index("languages_pkey", ["languageid"], { unique: true })
@Entity("languages", { schema: "iprovider" })
export class Languages {
  @Column("character varying", {
    primary: true,
    name: "languageid",
    length: 70,
  })
  languageid: string;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;
}
