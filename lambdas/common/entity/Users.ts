import { Column, Entity, Index, OneToMany } from "typeorm";
import { Licitacionmasterhistory } from "./Licitacionmasterhistory";
import { Licitacionwinners } from "./Licitacionwinners";

@Index("users_pkey", ["userid"], { unique: true })
@Entity("users", { schema: "iprovider" })
export class Users {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "userid", length: 70 })
  userid: string;

  @Column("character varying", { name: "personid", nullable: true, length: 70 })
  personid: string | null;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", { name: "login", nullable: true, length: 12 })
  login: string | null;

  @Column("text", { name: "password", nullable: true })
  password: string | null;

  @Column("boolean", {
    name: "passwordreset",
    nullable: true,
    default: () => "true",
  })
  passwordreset: boolean | null;

  @OneToMany(
    () => Licitacionmasterhistory,
    (licitacionmasterhistory) => licitacionmasterhistory.usercreate
  )
  licitacionmasterhistories: Licitacionmasterhistory[];

  @OneToMany(
    () => Licitacionwinners,
    (licitacionwinners) => licitacionwinners.usercreate
  )
  licitacionwinners: Licitacionwinners[];
}
