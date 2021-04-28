import { Column, Entity, Index } from "typeorm";

@Index("companiestocontacts_pkey", ["companiestocontactsid"], { unique: true })
@Entity("companiestocontacts", { schema: "iprovider" })
export class Companiestocontacts {
  @Column("character varying", {
    primary: true,
    name: "companiestocontactsid",
    length: 70,
  })
  companiestocontactsid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", { name: "personid", nullable: true, length: 70 })
  personid: string | null;

  @Column("character varying", {
    name: "contacttypeid",
    nullable: true,
    length: 70,
  })
  contacttypeid: string | null;

  @Column("character varying", {
    name: "contactroleid",
    nullable: true,
    length: 70,
  })
  contactroleid: string | null;
}
