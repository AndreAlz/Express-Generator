import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Licitacionmaster } from "./Licitacionmaster";
import { Licitacionmastersuppliers } from "./Licitacionmastersuppliers";
import { Licitacionwinners } from "./Licitacionwinners";

@Index("companies_pkey", ["companyid"], { unique: true })
@Entity("companies", { schema: "iprovider" })
export class Companies {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "companyid", length: 70 })
  companyid: string;

  @Column("integer", { name: "companytypeid", nullable: true })
  companytypeid: number | null;

  @Column("character varying", {
    name: "companysapid",
    nullable: true,
    length: 200,
  })
  companysapid: string | null;

  @Column("character varying", {
    name: "addressid",
    nullable: true,
    length: 70,
  })
  addressid: string | null;

  @Column("character varying", { name: "personid", nullable: true, length: 70 })
  personid: string | null;

  @Column("character varying", { name: "logourl", nullable: true, length: 250 })
  logourl: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 1500 })
  name: string | null;

  @Column("character varying", { name: "ruc", nullable: true, length: 20 })
  ruc: string | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "companycode" })
  companycode: number;

  @OneToMany(
    () => Licitacionmaster,
    (licitacionmaster) => licitacionmaster.winnerprovider
  )
  licitacionmasters: Licitacionmaster[];

  @OneToMany(
    () => Licitacionmastersuppliers,
    (licitacionmastersuppliers) => licitacionmastersuppliers.company
  )
  licitacionmastersuppliers: Licitacionmastersuppliers[];

  @OneToMany(
    () => Licitacionwinners,
    (licitacionwinners) => licitacionwinners.company
  )
  licitacionwinners: Licitacionwinners[];
}
