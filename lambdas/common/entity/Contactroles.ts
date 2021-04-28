import { Column, Entity, Index } from "typeorm";

@Index("contactroles_pkey", ["contactroleid"], { unique: true })
@Entity("contactroles", { schema: "iprovider" })
export class Contactroles {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "contactroleid",
    length: 70,
  })
  contactroleid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 10 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 500,
  })
  description: string | null;
}
