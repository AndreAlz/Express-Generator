import { Column, Entity, Index, OneToMany } from "typeorm";
import { Surveys } from "./Surveys";

@Index("typeofsupplier_pkey", ["idtypeofsupplier"], { unique: true })
@Entity("typeofsupplier", { schema: "iprovider" })
export class Typeofsupplier {
  @Column("character varying", {
    primary: true,
    name: "idtypeofsupplier",
    length: 70,
  })
  idtypeofsupplier: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("boolean", { name: "enabled", nullable: true, default: () => "true" })
  enabled: boolean | null;

  @OneToMany(() => Surveys, (surveys) => surveys.idtypeofsupplier)
  surveys: Surveys[];
}
