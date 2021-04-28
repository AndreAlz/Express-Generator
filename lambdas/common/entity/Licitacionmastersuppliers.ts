import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Cotizacionmaster } from "./Cotizacionmaster";
import { Licitacionmaster } from "./Licitacionmaster";
import { Companies } from "./Companies";

@Index("licitacionmastersuppliers_pkey", ["invitationid"], { unique: true })
@Entity("licitacionmastersuppliers", { schema: "iprovider" })
export class Licitacionmastersuppliers {
  @Column("character varying", {
    name: "licitacionmastersuppliersid",
    length: 70,
  })
  licitacionmastersuppliersid: string;

  @Column("character varying", {
    primary: true,
    name: "invitationid",
    length: 70,
  })
  invitationid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("timestamp with time zone", {
    name: "invitationdate",
    nullable: true,
  })
  invitationdate: Date | null;

  @Column("character varying", {
    name: "logincreate",
    nullable: true,
    length: 12,
  })
  logincreate: string | null;

  @Column("character varying", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("timestamp with time zone", {
    name: "invitationresponse",
    nullable: true,
  })
  invitationresponse: Date | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 500,
  })
  comments: string | null;

  @Column("boolean", {
    name: "notified",
    nullable: true,
    default: () => "false",
  })
  notified: boolean | null;

  @OneToMany(
    () => Cotizacionmaster,
    (cotizacionmaster) => cotizacionmaster.invitation
  )
  cotizacionmasters: Cotizacionmaster[];

  @ManyToOne(
    () => Licitacionmaster,
    (licitacionmaster) => licitacionmaster.licitacionmastersuppliers
  )
  @JoinColumn([
    { name: "licitacionmasterid", referencedColumnName: "licitacionid" },
  ])
  licitacionmaster: Licitacionmaster;

  @ManyToOne(
    () => Companies,
    (companies) => companies.licitacionmastersuppliers
  )
  @JoinColumn([{ name: "companyid", referencedColumnName: "companyid" }])
  company: Companies;
}
