import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("paymentconditions_pkey", ["paymentconditionid"], { unique: true })
@Entity("paymentconditions", { schema: "iprovider" })
export class Paymentconditions {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @PrimaryGeneratedColumn({ type: "integer", name: "paymentconditionid" })
  paymentconditionid: number;

  @Column("character varying", { name: "sapcode", nullable: true, length: 5 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
