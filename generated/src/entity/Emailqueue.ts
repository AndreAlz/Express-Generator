import { Column, Entity, Index } from "typeorm";

@Index("emailqueue_pkey", ["emailqueueid"], { unique: true })
@Entity("emailqueue", { schema: "iprovider" })
export class Emailqueue {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "emailqueueid",
    length: 70,
  })
  emailqueueid: string;

  @Column("character varying", {
    name: "emailtemplateid",
    nullable: true,
    length: 70,
  })
  emailtemplateid: string | null;

  @Column("text", { name: "emailsubject", nullable: true })
  emailsubject: string | null;

  @Column("text", { name: "emailbody", nullable: true })
  emailbody: string | null;

  @Column("text", { name: "emailsendto", nullable: true })
  emailsendto: string | null;

  @Column("text", { name: "emailcc", nullable: true })
  emailcc: string | null;

  @Column("boolean", { name: "sent", nullable: true })
  sent: boolean | null;

  @Column("timestamp with time zone", { name: "sentdate", nullable: true })
  sentdate: Date | null;

  @Column("text", { name: "errormessage", nullable: true })
  errormessage: string | null;
}
