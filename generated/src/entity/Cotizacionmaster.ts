import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Licitacionmastersuppliers } from "./Licitacionmastersuppliers";
import { Surveyresult } from "./Surveyresult";

@Index("cotizacionmaster_pkey", ["cotizacionid"], { unique: true })
@Entity("cotizacionmaster", { schema: "iprovider" })
export class Cotizacionmaster {
  @Column("character varying", {
    primary: true,
    name: "cotizacionid",
    length: 70,
  })
  cotizacionid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("timestamp with time zone", { name: "datecreate", nullable: true })
  datecreate: Date | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 500,
  })
  comments: string | null;

  @Column("boolean", { name: "enabled", nullable: true })
  enabled: boolean | null;

  @Column("character varying", { name: "status", nullable: true, length: 1 })
  status: string | null;

  @Column("timestamp with time zone", { name: "senddate", nullable: true })
  senddate: Date | null;

  @ManyToOne(
    () => Licitacionmastersuppliers,
    (licitacionmastersuppliers) => licitacionmastersuppliers.cotizacionmasters
  )
  @JoinColumn([{ name: "invitationid", referencedColumnName: "invitationid" }])
  invitation: Licitacionmastersuppliers;

  @OneToMany(() => Surveyresult, (surveyresult) => surveyresult.cotizacion)
  surveyresults: Surveyresult[];
}
