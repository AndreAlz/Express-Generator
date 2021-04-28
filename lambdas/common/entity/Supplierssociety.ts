import { Column, Entity, Index } from "typeorm";

@Index("supplierssociety_pkey", ["supplierssocietyid"], { unique: true })
@Entity("supplierssociety", { schema: "iprovider" })
export class Supplierssociety {
  @Column("character varying", {
    primary: true,
    name: "supplierssocietyid",
    length: 70,
  })
  supplierssocietyid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "supplierid",
    nullable: true,
    length: 70,
  })
  supplierid: string | null;

  @Column("character varying", {
    name: "societyid",
    nullable: true,
    length: 70,
  })
  societyid: string | null;

  @Column("character varying", {
    name: "buyerorganizationid",
    nullable: true,
    length: 70,
  })
  buyerorganizationid: string | null;

  @Column("character varying", {
    name: "paymentconditionid",
    nullable: true,
    length: 70,
  })
  paymentconditionid: string | null;

  @Column("character varying", {
    name: "linkedaccountid",
    nullable: true,
    length: 70,
  })
  linkedaccountid: string | null;

  @Column("character varying", {
    name: "treasurygroupid",
    nullable: true,
    length: 70,
  })
  treasurygroupid: string | null;

  @Column("character varying", {
    name: "accountinggroupid",
    nullable: true,
    length: 70,
  })
  accountinggroupid: string | null;

  @Column("character varying", {
    name: "formaltreatmentid",
    nullable: true,
    length: 70,
  })
  formaltreatmentid: string | null;
}
