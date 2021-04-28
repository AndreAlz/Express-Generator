import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("taxtypes_pkey", ["taxtypeid"], { unique: true })
@Entity("taxtypes", { schema: "iprovider" })
export class Taxtypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "taxtypeid" })
  taxtypeid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("numeric", {
    name: "taxpercentage",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  taxpercentage: string | null;

  @Column("character varying", { name: "sapcode", nullable: true, length: 10 })
  sapcode: string | null;

  @Column("character varying", { name: "erpcode", nullable: true, length: 10 })
  erpcode: string | null;
}
