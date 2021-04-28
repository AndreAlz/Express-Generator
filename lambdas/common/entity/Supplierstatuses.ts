import { Column, Entity, Index } from "typeorm";

@Index("supplierstatuses_pkey", ["supplierstatusid"], { unique: true })
@Entity("supplierstatuses", { schema: "iprovider" })
export class Supplierstatuses {
  @Column("character varying", {
    primary: true,
    name: "supplierstatusid",
    length: 70,
  })
  supplierstatusid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
