import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("identitycardtypes_pkey", ["identitycardtypeid"], { unique: true })
@Entity("identitycardtypes", { schema: "iprovider" })
export class Identitycardtypes {
  @PrimaryGeneratedColumn({ type: "integer", name: "identitycardtypeid" })
  identitycardtypeid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
