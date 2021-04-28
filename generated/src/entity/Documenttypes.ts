import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("documenttypes_pkey", ["documenttypeid"], { unique: true })
@Entity("documenttypes", { schema: "iprovider" })
export class Documenttypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "documenttypeid" })
  documenttypeid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
