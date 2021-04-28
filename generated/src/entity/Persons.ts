import { Column, Entity, Index } from "typeorm";

@Index("persons_pkey", ["personid"], { unique: true })
@Entity("persons", { schema: "iprovider" })
export class Persons {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "personid", length: 70 })
  personid: string;

  @Column("character varying", {
    name: "addressid",
    nullable: true,
    length: 70,
  })
  addressid: string | null;

  @Column("character varying", {
    name: "firstname",
    nullable: true,
    length: 200,
  })
  firstname: string | null;

  @Column("character varying", {
    name: "lastname",
    nullable: true,
    length: 200,
  })
  lastname: string | null;

  @Column("character varying", {
    name: "telephone",
    nullable: true,
    length: 20,
  })
  telephone: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 200 })
  email: string | null;

  @Column("character varying", {
    name: "identitycard",
    nullable: true,
    length: 15,
  })
  identitycard: string | null;

  @Column("integer", { name: "identitycardtypeid", nullable: true })
  identitycardtypeid: number | null;

  @Column("character varying", { name: "sapcode", nullable: true, length: 20 })
  sapcode: string | null;

  @Column("character varying", { name: "area", nullable: true, length: 200 })
  area: string | null;
}
