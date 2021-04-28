import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Questions } from "./Questions";

@Index("choices_pkey", ["idchoice"], { unique: true })
@Entity("choices", { schema: "iprovider" })
export class Choices {
  @Column("character varying", { primary: true, name: "idchoice", length: 70 })
  idchoice: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 250,
  })
  description: string | null;

  @Column("numeric", { name: "score", nullable: true, precision: 18, scale: 4 })
  score: string | null;

  @Column("boolean", { name: "enabled", nullable: true })
  enabled: boolean | null;

  @ManyToOne(() => Questions, (questions) => questions.choices)
  @JoinColumn([{ name: "idquestion", referencedColumnName: "idquestion" }])
  idquestion: Questions;
}
