import { Column, Entity, Index } from "typeorm";

@Index("logwebservices_pkey", ["logwebserviceid"], { unique: true })
@Entity("logwebservices", { schema: "iprovider" })
export class Logwebservices {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "logwebserviceid",
    length: 70,
  })
  logwebserviceid: string;

  @Column("character varying", {
    name: "processname",
    nullable: true,
    length: 200,
  })
  processname: string | null;

  @Column("character varying", {
    name: "username",
    nullable: true,
    length: 100,
  })
  username: string | null;

  @Column("timestamp with time zone", {
    name: "requestdatetime",
    nullable: true,
  })
  requestdatetime: Date | null;

  @Column("text", { name: "datainput", nullable: true })
  datainput: string | null;

  @Column("text", { name: "dataoutput", nullable: true })
  dataoutput: string | null;

  @Column("integer", { name: "recordsreceived", nullable: true })
  recordsreceived: number | null;

  @Column("integer", { name: "recordsprocessed", nullable: true })
  recordsprocessed: number | null;

  @Column("integer", { name: "recordsrejected", nullable: true })
  recordsrejected: number | null;

  @Column("boolean", {
    name: "success",
    nullable: true,
    default: () => "false",
  })
  success: boolean | null;

  @Column("text", { name: "errorwebservice", nullable: true })
  errorwebservice: string | null;
}
