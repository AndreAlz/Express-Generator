import { Column, Entity, Index, OneToMany } from "typeorm";
import { Questions } from "./Questions";

@Index("typeofquestions_pkey", ["idtypeofquestion"], { unique: true })
@Entity("typeofquestions", { schema: "iprovider" })
export class Typeofquestions {
  @Column("character varying", {
    primary: true,
    name: "idtypeofquestion",
    length: 70,
  })
  idtypeofquestion: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("boolean", {
    name: "enabled",
    nullable: true,
    default: () => "false",
  })
  enabled: boolean | null;

  @OneToMany(() => Questions, (questions) => questions.idtypeofquestion)
  questions: Questions[];
}
