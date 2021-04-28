import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Licitacionmaster } from "./Licitacionmaster";
import { Companies } from "./Companies";
import { Users } from "./Users";

@Index("licitacionwinners_pkey", ["licitacionwinnerid"], { unique: true })
@Entity("licitacionwinners", { schema: "iprovider" })
export class Licitacionwinners {
  @Column("character varying", {
    primary: true,
    name: "licitacionwinnerid",
    length: 70,
  })
  licitacionwinnerid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("timestamp with time zone", { name: "fechawin", nullable: true })
  fechawin: Date | null;

  @Column("numeric", {
    name: "puntajeinterno",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  puntajeinterno: string | null;

  @Column("numeric", {
    name: "puntajetecnico",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  puntajetecnico: string | null;

  @Column("numeric", {
    name: "puntajeeconomico",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  puntajeeconomico: string | null;

  @Column("numeric", {
    name: "totalpuntaje",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalpuntaje: string | null;

  @ManyToOne(
    () => Licitacionmaster,
    (licitacionmaster) => licitacionmaster.licitacionwinners
  )
  @JoinColumn([
    { name: "licitacionmasterid", referencedColumnName: "licitacionid" },
  ])
  licitacionmaster: Licitacionmaster;

  @ManyToOne(() => Companies, (companies) => companies.licitacionwinners)
  @JoinColumn([{ name: "companyid", referencedColumnName: "companyid" }])
  company: Companies;

  @ManyToOne(() => Users, (users) => users.licitacionwinners)
  @JoinColumn([{ name: "usercreate", referencedColumnName: "userid" }])
  usercreate: Users;
}
