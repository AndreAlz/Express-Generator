import { Column, Entity, Index } from "typeorm";

@Index("sysdiagrams_pkey", ["diagramId"], { unique: true })
@Entity("sysdiagrams", { schema: "iprovider" })
export class Sysdiagrams {
  @Column("character varying", { name: "name", nullable: true, length: 128 })
  name: string | null;

  @Column("character varying", {
    name: "principal_id",
    nullable: true,
    length: 70,
  })
  principalId: string | null;

  @Column("character varying", {
    primary: true,
    name: "diagram_id",
    length: 70,
  })
  diagramId: string;

  @Column("integer", { name: "version", nullable: true })
  version: number | null;

  @Column("text", { name: "definition", nullable: true })
  definition: string | null;
}
