import { Column, Entity, Index } from "typeorm";

@Index("serviceagenttypes_pkey", ["serviceagenttypeid"], { unique: true })
@Entity("serviceagenttypes", { schema: "iprovider" })
export class Serviceagenttypes {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "serviceagenttypeid",
    length: 70,
  })
  serviceagenttypeid: string;

  @Column("character varying", { name: "sapcode", nullable: true, length: 4 })
  sapcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
