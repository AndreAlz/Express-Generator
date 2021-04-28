import { Column, Entity, Index } from "typeorm";

@Index("serviceentrysheets_pkey", ["serviceentrysheetid"], { unique: true })
@Entity("serviceentrysheets", { schema: "iprovider" })
export class Serviceentrysheets {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "serviceentrysheetid",
    length: 70,
  })
  serviceentrysheetid: string;

  @Column("character varying", {
    name: "documentid",
    nullable: true,
    length: 70,
  })
  documentid: string | null;

  @Column("integer", { name: "servicetypeid", nullable: true })
  servicetypeid: number | null;

  @Column("character varying", {
    name: "acceptedbypersonid",
    nullable: true,
    length: 70,
  })
  acceptedbypersonid: string | null;

  @Column("character varying", {
    name: "approvedbypersonid",
    nullable: true,
    length: 70,
  })
  approvedbypersonid: string | null;

  @Column("date", { name: "approvaldate", nullable: true })
  approvaldate: string | null;

  @Column("smallint", { name: "financialyear", nullable: true })
  financialyear: number | null;

  @Column("date", { name: "accountingdate", nullable: true })
  accountingdate: string | null;

  @Column("date", { name: "startservicedate", nullable: true })
  startservicedate: string | null;

  @Column("date", { name: "endservicedate", nullable: true })
  endservicedate: string | null;

  @Column("character varying", {
    name: "waybillerpid",
    nullable: true,
    length: 50,
  })
  waybillerpid: string | null;
}
