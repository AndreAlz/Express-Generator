import { Column, Entity, Index } from "typeorm";

@Index("biddingstosurveyresults_pkey", ["idresult"], { unique: true })
@Entity("biddingstosurveyresults", { schema: "iprovider" })
export class Biddingstosurveyresults {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "supplierid",
    nullable: true,
    length: 70,
  })
  supplierid: string | null;

  @Column("character varying", {
    name: "biddingid",
    nullable: true,
    length: 70,
  })
  biddingid: string | null;

  @Column("character varying", { primary: true, name: "idresult", length: 70 })
  idresult: string;
}
