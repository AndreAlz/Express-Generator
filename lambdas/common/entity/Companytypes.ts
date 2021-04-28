import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("companytypes_pkey", ["companytypeid"], { unique: true })
@Entity("companytypes", { schema: "iprovider" })
export class Companytypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "companytypeid" })
  companytypeid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
