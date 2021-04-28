import { Column, Entity, Index } from "typeorm";

@Index("logdberrors_pkey", ["dberrorid"], { unique: true })
@Entity("logdberrors", { schema: "iprovider" })
export class Logdberrors {
  @Column("character varying", { primary: true, name: "dberrorid", length: 70 })
  dberrorid: string;

  @Column("character varying", {
    name: "dberroruser",
    nullable: true,
    length: 128,
  })
  dberroruser: string | null;

  @Column("integer", { name: "dberrornumber", nullable: true })
  dberrornumber: number | null;

  @Column("integer", { name: "dberrorstate", nullable: true })
  dberrorstate: number | null;

  @Column("integer", { name: "dberrorseverity", nullable: true })
  dberrorseverity: number | null;

  @Column("integer", { name: "dberrorline", nullable: true })
  dberrorline: number | null;

  @Column("character varying", {
    name: "dberrorprocedure",
    nullable: true,
    length: 128,
  })
  dberrorprocedure: string | null;

  @Column("character varying", {
    name: "dberrormessage",
    nullable: true,
    length: 4000,
  })
  dberrormessage: string | null;

  @Column("timestamp with time zone", {
    name: "dberrordatetime",
    nullable: true,
  })
  dberrordatetime: Date | null;
}
