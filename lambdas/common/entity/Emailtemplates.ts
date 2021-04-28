import { Column, Entity, Index } from "typeorm";

@Index("emailtemplates_pkey", ["emailtemplateid"], { unique: true })
@Entity("emailtemplates", { schema: "iprovider" })
export class Emailtemplates {
  @Column("character varying", {
    primary: true,
    name: "emailtemplateid",
    length: 70,
  })
  emailtemplateid: string;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 2000,
  })
  description: string | null;

  @Column("character varying", { name: "subject", nullable: true, length: 200 })
  subject: string | null;

  @Column("text", { name: "body", nullable: true })
  body: string | null;

  @Column("integer", { name: "quantityparameter", nullable: true })
  quantityparameter: number | null;

  @Column("character varying", {
    name: "descriptionparameter",
    nullable: true,
    length: 2000,
  })
  descriptionparameter: string | null;
}
