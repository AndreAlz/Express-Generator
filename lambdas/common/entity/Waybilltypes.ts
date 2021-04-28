import { Column, Entity, Index } from "typeorm";

@Index("waybilltypes_pkey", ["waybilltypeid"], { unique: true })
@Entity("waybilltypes", { schema: "iprovider" })
export class Waybilltypes {
  @Column("character varying", {
    primary: true,
    name: "waybilltypeid",
    length: 70,
  })
  waybilltypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
