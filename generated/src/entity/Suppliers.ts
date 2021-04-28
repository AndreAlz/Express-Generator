import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Surveys } from "./Surveys";
import { Surveyresult } from "./Surveyresult";

@Index("suppliers_pkey", ["supplierid"], { unique: true })
@Entity("suppliers", { schema: "iprovider" })
export class Suppliers {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "supplierid",
    length: 70,
  })
  supplierid: string;

  @Column("character varying", {
    name: "supplierstatusid",
    nullable: true,
    length: 70,
  })
  supplierstatusid: string | null;

  @Column("character varying", {
    name: "suppliertypeid",
    nullable: true,
    length: 70,
  })
  suppliertypeid: string | null;

  @Column("character varying", {
    name: "businesstypeid",
    nullable: true,
    length: 70,
  })
  businesstypeid: string | null;

  @Column("character varying", {
    name: "formaltreatmentid",
    nullable: true,
    length: 70,
  })
  formaltreatmentid: string | null;

  @Column("character varying", {
    name: "taxnumbertypeid",
    nullable: true,
    length: 70,
  })
  taxnumbertypeid: string | null;

  @Column("character varying", {
    name: "accountinggroupid",
    nullable: true,
    length: 70,
  })
  accountinggroupid: string | null;

  @Column("character varying", {
    name: "serviceagenttypeid",
    nullable: true,
    length: 70,
  })
  serviceagenttypeid: string | null;

  @Column("character varying", {
    name: "linkedaccountid",
    nullable: true,
    length: 70,
  })
  linkedaccountid: string | null;

  @Column("character varying", {
    name: "paymentconditionid",
    nullable: true,
    length: 70,
  })
  paymentconditionid: string | null;

  @Column("character varying", {
    name: "treasurygroupid",
    nullable: true,
    length: 70,
  })
  treasurygroupid: string | null;

  @Column("character varying", {
    name: "defaultcurrencyid",
    nullable: true,
    length: 70,
  })
  defaultcurrencyid: string | null;

  @Column("character varying", {
    name: "incotermid",
    nullable: true,
    length: 70,
  })
  incotermid: string | null;

  @Column("character varying", {
    name: "confirmationcontrolid",
    nullable: true,
    length: 70,
  })
  confirmationcontrolid: string | null;

  @Column("character varying", {
    name: "tradingname",
    nullable: true,
    length: 200,
  })
  tradingname: string | null;

  @Column("character varying", {
    name: "qualitycertificate",
    nullable: true,
    length: 500,
  })
  qualitycertificate: string | null;

  @Column("date", { name: "incorporationdate", nullable: true })
  incorporationdate: string | null;

  @Column("character varying", {
    name: "telephone",
    nullable: true,
    length: 20,
  })
  telephone: string | null;

  @Column("character varying", { name: "fax", nullable: true, length: 20 })
  fax: string | null;

  @Column("character varying", { name: "website", nullable: true, length: 253 })
  website: string | null;

  @Column("boolean", { name: "hasqualitycertificate", nullable: true })
  hasqualitycertificate: boolean | null;

  @Column("character varying", {
    name: "suppliernationaltypeid",
    nullable: true,
    length: 70,
  })
  suppliernationaltypeid: string | null;

  @Column("character varying", {
    name: "economicactivityid",
    nullable: true,
    length: 70,
  })
  economicactivityid: string | null;

  @Column("boolean", { name: "buyerrelated", nullable: true })
  buyerrelated: boolean | null;

  @Column("character varying", {
    name: "buyerorganizationid",
    nullable: true,
    length: 70,
  })
  buyerorganizationid: string | null;

  @Column("boolean", {
    name: "surveystate",
    nullable: true,
    default: () => "false",
  })
  surveystate: boolean | null;

  @Column("character varying", {
    name: "categoryid",
    nullable: true,
    length: 70,
  })
  categoryid: string | null;

  @Column("character varying", { name: "regionid", nullable: true, length: 70 })
  regionid: string | null;

  @Column("character varying", {
    name: "societyid",
    nullable: true,
    length: 70,
  })
  societyid: string | null;

  @Column("character varying", {
    name: "byinvitation",
    nullable: true,
    length: 70,
  })
  byinvitation: string | null;

  @Column("character varying", { name: "distrito", nullable: true, length: 40 })
  distrito: string | null;

  @Column("timestamp with time zone", { name: "modifieddate", nullable: true })
  modifieddate: Date | null;

  @ManyToOne(() => Surveys, (surveys) => surveys.suppliers)
  @JoinColumn([{ name: "surveyid", referencedColumnName: "idsurvey" }])
  survey: Surveys;

  @OneToMany(() => Surveyresult, (surveyresult) => surveyresult.supplier)
  surveyresults: Surveyresult[];
}
