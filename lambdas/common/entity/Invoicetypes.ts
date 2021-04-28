import { Column, Entity, Index } from "typeorm";

@Index("invoicetypes_pkey", ["invoicetypeid"], { unique: true })
@Entity("invoicetypes", { schema: "iprovider" })
export class Invoicetypes {
  @Column("character varying", {
    primary: true,
    name: "invoicetypeid",
    length: 70,
  })
  invoicetypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
