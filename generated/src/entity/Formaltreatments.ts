import { Column, Entity, Index } from "typeorm";

@Index("formaltreatments_pkey", ["formaltreatmentid"], { unique: true })
@Entity("formaltreatments", { schema: "iprovider" })
export class Formaltreatments {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "formaltreatmentid",
    length: 70,
  })
  formaltreatmentid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
