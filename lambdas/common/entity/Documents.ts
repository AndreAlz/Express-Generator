import { Column, Entity, Index } from "typeorm";

@Index("documents_pkey", ["documentid"], { unique: true })
@Entity("documents", { schema: "iprovider" })
export class Documents {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "documentid",
    length: 70,
  })
  documentid: string;

  @Column("character varying", {
    name: "parentdocumentid",
    nullable: true,
    length: 70,
  })
  parentdocumentid: string | null;

  @Column("integer", { name: "documenttypeid", nullable: true })
  documenttypeid: number | null;

  @Column("character varying", {
    name: "documentsapid",
    nullable: true,
    length: 70,
  })
  documentsapid: string | null;

  @Column("integer", { name: "documentstatusid", nullable: true })
  documentstatusid: number | null;

  @Column("character varying", {
    name: "createdbyuserid",
    nullable: true,
    length: 70,
  })
  createdbyuserid: string | null;

  @Column("character varying", {
    name: "createdbyusersap",
    nullable: true,
    length: 200,
  })
  createdbyusersap: string | null;

  @Column("character varying", {
    name: "buyercompanyid",
    nullable: true,
    length: 70,
  })
  buyercompanyid: string | null;

  @Column("character varying", {
    name: "providercompanyid",
    nullable: true,
    length: 70,
  })
  providercompanyid: string | null;

  @Column("integer", { name: "defaultcurrencyid", nullable: true })
  defaultcurrencyid: number | null;

  @Column("timestamp with time zone", { name: "creationdate", nullable: true })
  creationdate: Date | null;

  @Column("date", { name: "issuedate", nullable: true })
  issuedate: string | null;

  @Column("text", { name: "comments", nullable: true })
  comments: string | null;

  @Column("character varying", {
    name: "refsapdocument",
    nullable: true,
    length: 100,
  })
  refsapdocument: string | null;

  @Column("character varying", {
    name: "documentsapcontable",
    nullable: true,
    length: 20,
  })
  documentsapcontable: string | null;

  @Column("bigint", { name: "documentcode", nullable: true })
  documentcode: string | null;
}
