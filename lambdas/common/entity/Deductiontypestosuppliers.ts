import { Column, Entity, Index } from "typeorm";

@Index("deductiontypestosuppliers_pkey", ["deductiontypestosuppliersid"], {
  unique: true,
})
@Entity("deductiontypestosuppliers", { schema: "iprovider" })
export class Deductiontypestosuppliers {
  @Column("character varying", {
    primary: true,
    name: "deductiontypestosuppliersid",
    length: 70,
  })
  deductiontypestosuppliersid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", {
    name: "deductiontypeid",
    nullable: true,
    length: 70,
  })
  deductiontypeid: string | null;

  @Column("character varying", {
    name: "deductionindicatorid",
    nullable: true,
    length: 70,
  })
  deductionindicatorid: string | null;

  @Column("boolean", { name: "taxwitholding", nullable: true })
  taxwitholding: boolean | null;
}
