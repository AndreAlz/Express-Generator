import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("servicetypes_pkey", ["servicetypeid"], { unique: true })
@Entity("servicetypes", { schema: "iprovider" })
export class Servicetypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "servicetypeid" })
  servicetypeid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
