import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Choices } from "./Choices";
import { Sections } from "./Sections";
import { Typeofquestions } from "./Typeofquestions";
import { Surveyresult } from "./Surveyresult";
import { Uploadresponse } from "./Uploadresponse";

@Index("questions_pkey", ["idquestion"], { unique: true })
@Entity("questions", { schema: "iprovider" })
export class Questions {
  @Column("character varying", {
    primary: true,
    name: "idquestion",
    length: 70,
  })
  idquestion: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 250,
  })
  description: string | null;

  @Column("numeric", {
    name: "weight",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  weight: string | null;

  @Column("boolean", {
    name: "required",
    nullable: true,
    default: () => "false",
  })
  required: boolean | null;

  @Column("boolean", { name: "enabled", nullable: true })
  enabled: boolean | null;

  @OneToMany(() => Choices, (choices) => choices.idquestion)
  choices: Choices[];

  @ManyToOne(() => Sections, (sections) => sections.questions)
  @JoinColumn([{ name: "idsection", referencedColumnName: "idsection" }])
  idsection: Sections;

  @ManyToOne(
    () => Typeofquestions,
    (typeofquestions) => typeofquestions.questions
  )
  @JoinColumn([
    { name: "idtypeofquestion", referencedColumnName: "idtypeofquestion" },
  ])
  idtypeofquestion: Typeofquestions;

  @OneToMany(() => Surveyresult, (surveyresult) => surveyresult.idquestion)
  surveyresults: Surveyresult[];

  @OneToMany(
    () => Uploadresponse,
    (uploadresponse) => uploadresponse.idquestion
  )
  uploadresponses: Uploadresponse[];
}
