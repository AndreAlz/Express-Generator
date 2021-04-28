import { Column, Entity, Index } from "typeorm";

@Index("specialroles_pkey", ["specialroleid"], { unique: true })
@Entity("specialroles", { schema: "iprovider" })
export class Specialroles {
  @Column("character varying", {
    primary: true,
    name: "specialroleid",
    length: 70,
  })
  specialroleid: string;

  @Column("character varying", { name: "name", nullable: true, length: 30 })
  name: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
