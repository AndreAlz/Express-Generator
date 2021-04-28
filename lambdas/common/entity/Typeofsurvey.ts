import { Column, Entity, Index, OneToMany } from "typeorm";
import { Surveys } from "./Surveys";

@Index("typeofsurvey_pkey", ["typeofsurveyid"], { unique: true })
@Entity("typeofsurvey", { schema: "iprovider" })
export class Typeofsurvey {
  @Column("character varying", {
    primary: true,
    name: "typeofsurveyid",
    length: 70,
  })
  typeofsurveyid: string;

  @Column("character varying", {
    name: "descripcion",
    nullable: true,
    length: 200,
  })
  descripcion: string | null;

  @Column("boolean", { name: "enbled", nullable: true, default: () => "true" })
  enbled: boolean | null;

  @OneToMany(() => Surveys, (surveys) => surveys.typeofsurvey)
  surveys: Surveys[];
}
