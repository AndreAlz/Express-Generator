import { Column, Entity, Index } from "typeorm";

@Index("confirmationcontrols_pkey", ["confirmationcontrolid"], { unique: true })
@Entity("confirmationcontrols", { schema: "iprovider" })
export class Confirmationcontrols {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "confirmationcontrolid",
    length: 70,
  })
  confirmationcontrolid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 5 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
