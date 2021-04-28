import { Column, Entity, Index } from "typeorm";

@Index("masterusers_pkey", ["userid"], { unique: true })
@Entity("masterusers", { schema: "iprovider" })
export class Masterusers {
  @Column("character varying", { primary: true, name: "userid", length: 70 })
  userid: string;

  @Column("character varying", { name: "login", nullable: true, length: 12 })
  login: string | null;

  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Column("boolean", { name: "passwordreset", nullable: true })
  passwordreset: boolean | null;

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

  @Column("character varying", { name: "telephone", nullable: true, length: 9 })
  telephone: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 200 })
  email: string | null;

  @Column("character varying", {
    name: "specialroleid",
    nullable: true,
    length: 70,
  })
  specialroleid: string | null;
}
