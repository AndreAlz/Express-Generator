import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Licitacionmaster } from "./Licitacionmaster";
import { Users } from "./Users";

@Index("licitacionmasterhistory_pkey", ["historyid"], { unique: true })
@Entity("licitacionmasterhistory", { schema: "iprovider" })
export class Licitacionmasterhistory {
  @Column("character varying", { primary: true, name: "historyid", length: 70 })
  historyid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("timestamp with time zone", { name: "datehistory", nullable: true })
  datehistory: Date | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;

  @Column("time without time zone", { name: "time", nullable: true })
  time: string | null;

  @Column("character varying", { name: "icon", nullable: true, length: 20 })
  icon: string | null;

  @Column("character varying", { name: "subject", nullable: true, length: 200 })
  subject: string | null;

  @Column("text", { name: "body", nullable: true })
  body: string | null;

  @ManyToOne(
    () => Licitacionmaster,
    (licitacionmaster) => licitacionmaster.licitacionmasterhistories
  )
  @JoinColumn([
    { name: "licitacionmasterid", referencedColumnName: "licitacionid" },
  ])
  licitacionmaster: Licitacionmaster;

  @ManyToOne(() => Users, (users) => users.licitacionmasterhistories)
  @JoinColumn([{ name: "usercreate", referencedColumnName: "userid" }])
  usercreate: Users;
}
