import { Column, Entity, Index } from "typeorm";

@Index("companynotificationemails_pkey", ["companynotificationemailsid"], {
  unique: true,
})
@Entity("companynotificationemails", { schema: "iprovider" })
export class Companynotificationemails {
  @Column("character varying", {
    primary: true,
    name: "companynotificationemailsid",
    length: 70,
  })
  companynotificationemailsid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "companylid",
    nullable: true,
    length: 70,
  })
  companylid: string | null;

  @Column("character varying", {
    name: "documenttypeid",
    nullable: true,
    length: 70,
  })
  documenttypeid: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 300 })
  email: string | null;
}
