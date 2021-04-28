import { Column, Entity, Index } from "typeorm";

@Index("surveytemplates_pkey", ["surveytemplateid"], { unique: true })
@Entity("surveytemplates", { schema: "iprovider" })
export class Surveytemplates {
  @Column("character varying", {
    primary: true,
    name: "surveytemplateid",
    length: 70,
  })
  surveytemplateid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 2000,
  })
  description: string | null;
}
