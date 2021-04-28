import { Column, Entity, Index } from "typeorm";

@Index("documentstatuses_pkey", ["id"], { unique: true })
@Entity("documentstatuses", { schema: "iprovider" })
export class Documentstatuses {
  @Column("integer", { name: "documenttypeid" })
  documenttypeid: number;

  @Column("integer", { name: "documentstatusid" })
  documentstatusid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", { primary: true, name: "id", length: 70 })
  id: string;
}
