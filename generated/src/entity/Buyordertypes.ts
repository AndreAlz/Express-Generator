import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("buyordertypes_pkey", ["buyordertypeid"], { unique: true })
@Entity("buyordertypes", { schema: "iprovider" })
export class Buyordertypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "buyordertypeid" })
  buyordertypeid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
