import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Questions } from "./Questions";

@Index("uploadresponse_pkey", ["idupload"], { unique: true })
@Entity("uploadresponse", { schema: "iprovider" })
export class Uploadresponse {
  @Column("character varying", { primary: true, name: "idupload", length: 70 })
  idupload: string;

  @Column("text", { name: "guidsession", nullable: true })
  guidsession: string | null;

  @Column("character varying", {
    name: "originalnamefile",
    nullable: true,
    length: 500,
  })
  originalnamefile: string | null;

  @Column("character varying", {
    name: "namefileserver",
    nullable: true,
    length: 500,
  })
  namefileserver: string | null;

  @Column("integer", { name: "size", nullable: true })
  size: number | null;

  @Column("character varying", { name: "extension", nullable: true, length: 5 })
  extension: string | null;

  @Column("text", { name: "completeurl", nullable: true })
  completeurl: string | null;

  @Column("character varying", { name: "typefile", nullable: true, length: 50 })
  typefile: string | null;

  @ManyToOne(() => Questions, (questions) => questions.uploadresponses)
  @JoinColumn([{ name: "idquestion", referencedColumnName: "idquestion" }])
  idquestion: Questions;
}
