import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("documentitemstatuses_pkey", ["documentitemstatusid"], { unique: true })
@Entity("documentitemstatuses", { schema: "iprovider" })
export class Documentitemstatuses {
  @PrimaryGeneratedColumn({ type: "integer", name: "documentitemstatusid" })
  documentitemstatusid: number;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
