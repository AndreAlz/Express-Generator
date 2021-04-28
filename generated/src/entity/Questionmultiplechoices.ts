import { Column, Entity, Index } from "typeorm";

@Index("questionmultiplechoices_pkey", ["multiplechoiceid"], { unique: true })
@Entity("questionmultiplechoices", { schema: "iprovider" })
export class Questionmultiplechoices {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "multiplechoiceid",
    length: 70,
  })
  multiplechoiceid: string;

  @Column("character varying", {
    name: "questionid",
    nullable: true,
    length: 70,
  })
  questionid: string | null;

  @Column("character varying", { name: "answer", nullable: true, length: 2000 })
  answer: string | null;
}
