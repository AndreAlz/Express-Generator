import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Questions } from "./Questions";
import { Surveys } from "./Surveys";

@Index("sections_pkey", ["idsection"], { unique: true })
@Entity("sections", { schema: "iprovider" })
export class Sections {
  @Column("character varying", { primary: true, name: "idsection", length: 70 })
  idsection: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("boolean", { name: "enabled", nullable: true, default: () => "true" })
  enabled: boolean | null;

  @OneToMany(() => Questions, (questions) => questions.idsection)
  questions: Questions[];

  @ManyToOne(() => Surveys, (surveys) => surveys.sections)
  @JoinColumn([{ name: "idsurvey", referencedColumnName: "idsurvey" }])
  idsurvey: Surveys;
}
