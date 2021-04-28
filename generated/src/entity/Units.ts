import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("units_pkey", ["unitid"], { unique: true })
@Entity("units", { schema: "iprovider" })
export class Units {
  @PrimaryGeneratedColumn({ type: "integer", name: "unitid" })
  unitid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", { name: "sapcode", nullable: true, length: 4 })
  sapcode: string | null;

  @Column("character varying", { name: "unitiso", nullable: true, length: 4 })
  unitiso: string | null;
}
