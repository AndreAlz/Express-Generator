import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Buyerorganizations } from "./Buyerorganizations";

@Index("biddings_pkey", ["biddingid"], { unique: true })
@Entity("biddings", { schema: "iprovider" })
export class Biddings {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { primary: true, name: "biddingid", length: 70 })
  biddingid: string;

  @Column("character varying", {
    name: "documentid",
    nullable: true,
    length: 70,
  })
  documentid: string | null;

  @Column("character varying", { name: "surveyid", nullable: true, length: 70 })
  surveyid: string | null;

  @Column("date", { name: "enddate", nullable: true })
  enddate: string | null;

  @Column("integer", { name: "daysforquotation", nullable: true })
  daysforquotation: number | null;

  @Column("character varying", {
    name: "fileattachedid",
    nullable: true,
    length: 70,
  })
  fileattachedid: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 250,
  })
  description: string | null;

  @Column("character varying", { name: "gpocompra", nullable: true, length: 3 })
  gpocompra: string | null;

  @Column("character varying", {
    name: "docgenerado",
    nullable: true,
    length: 2,
  })
  docgenerado: string | null;

  @Column("numeric", {
    name: "maxamount",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  maxamount: string | null;

  @Column("character varying", {
    name: "autogenerateid",
    nullable: true,
    length: 15,
  })
  autogenerateid: string | null;

  @Column("character varying", {
    name: "clasedoccompra",
    nullable: true,
    length: 4,
  })
  clasedoccompra: string | null;

  @Column("character varying", {
    name: "paymentconditionid",
    nullable: true,
    length: 70,
  })
  paymentconditionid: string | null;

  @ManyToOne(
    () => Buyerorganizations,
    (buyerorganizations) => buyerorganizations.biddings
  )
  @JoinColumn([
    {
      name: "buyerorganizationid",
      referencedColumnName: "buyerorganizationid",
    },
  ])
  buyerorganization: Buyerorganizations;
}
