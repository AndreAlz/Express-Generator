import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Fileattachedlicitacion } from "./Fileattachedlicitacion";
import { Surveys } from "./Surveys";
import { Companies } from "./Companies";
import { Licitacionmasterdetail } from "./Licitacionmasterdetail";
import { Licitacionmasterhistory } from "./Licitacionmasterhistory";
import { Licitacionmastersuppliers } from "./Licitacionmastersuppliers";
import { Licitacionwinners } from "./Licitacionwinners";

@Index("licitacionmaster_pkey", ["licitacionid"], { unique: true })
@Entity("licitacionmaster", { schema: "iprovider" })
export class Licitacionmaster {
  @Column("character varying", {
    primary: true,
    name: "licitacionid",
    length: 70,
  })
  licitacionid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "usercreate",
    nullable: true,
    length: 12,
  })
  usercreate: string | null;

  @Column("character varying", {
    name: "licitacioncode",
    nullable: true,
    length: 20,
  })
  licitacioncode: string | null;

  @Column("date", { name: "createdate", nullable: true })
  createdate: string | null;

  @Column("character varying", {
    name: "paymentsconditionsid",
    nullable: true,
    length: 70,
  })
  paymentsconditionsid: string | null;

  @Column("numeric", {
    name: "ptecnico",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  ptecnico: string | null;

  @Column("numeric", {
    name: "peconomico",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  peconomico: string | null;

  @Column("integer", { name: "currencyid", nullable: true })
  currencyid: number | null;

  @Column("boolean", {
    name: "flagpreciobase",
    nullable: true,
    default: () => "false",
  })
  flagpreciobase: boolean | null;

  @Column("numeric", {
    name: "presupuesto",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  presupuesto: string | null;

  @Column("boolean", {
    name: "flagppto",
    nullable: true,
    default: () => "false",
  })
  flagppto: boolean | null;

  @Column("character varying", {
    name: "namelicitacion",
    nullable: true,
    length: 200,
  })
  namelicitacion: string | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 500,
  })
  comments: string | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;

  @Column("timestamp with time zone", {
    name: "fechalimiteaceptacion",
    nullable: true,
  })
  fechalimiteaceptacion: Date | null;

  @Column("timestamp with time zone", {
    name: "fechaliberacion",
    nullable: true,
  })
  fechaliberacion: Date | null;

  @Column("timestamp with time zone", { name: "fechacierre", nullable: true })
  fechacierre: Date | null;

  @OneToMany(
    () => Fileattachedlicitacion,
    (fileattachedlicitacion) => fileattachedlicitacion.licitacionmaster
  )
  fileattachedlicitacions: Fileattachedlicitacion[];

  @ManyToOne(() => Surveys, (surveys) => surveys.licitacionmasters)
  @JoinColumn([{ name: "surveyid", referencedColumnName: "idsurvey" }])
  survey: Surveys;

  @ManyToOne(() => Companies, (companies) => companies.licitacionmasters)
  @JoinColumn([{ name: "winnerprovider", referencedColumnName: "companyid" }])
  winnerprovider: Companies;

  @OneToMany(
    () => Licitacionmasterdetail,
    (licitacionmasterdetail) => licitacionmasterdetail.licitacion
  )
  licitacionmasterdetails: Licitacionmasterdetail[];

  @OneToMany(
    () => Licitacionmasterhistory,
    (licitacionmasterhistory) => licitacionmasterhistory.licitacionmaster
  )
  licitacionmasterhistories: Licitacionmasterhistory[];

  @OneToMany(
    () => Licitacionmastersuppliers,
    (licitacionmastersuppliers) => licitacionmastersuppliers.licitacionmaster
  )
  licitacionmastersuppliers: Licitacionmastersuppliers[];

  @OneToMany(
    () => Licitacionwinners,
    (licitacionwinners) => licitacionwinners.licitacionmaster
  )
  licitacionwinners: Licitacionwinners[];
}
