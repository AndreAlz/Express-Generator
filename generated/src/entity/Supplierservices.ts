import { Column, Entity, Index } from "typeorm";

@Index("supplierservices_pkey", ["supplierserviceid"], { unique: true })
@Entity("supplierservices", { schema: "iprovider" })
export class Supplierservices {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", {
    primary: true,
    name: "supplierserviceid",
    length: 70,
  })
  supplierserviceid: string;

  @Column("character varying", {
    name: "servicetypeid",
    nullable: true,
    length: 70,
  })
  servicetypeid: string | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;
}
