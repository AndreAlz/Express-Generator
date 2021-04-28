import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("test", { schema: "iprovider" })
export class Test {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "dsc", nullable: true, length: 50 })
  dsc: string | null;
}
