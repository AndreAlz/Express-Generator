import { Column, Entity, Index } from "typeorm";

@Index("biddingstosuppliers_pkey", ["biddingstosuppliersid"], { unique: true })
@Entity("biddingstosuppliers", { schema: "iprovider" })
export class Biddingstosuppliers {
  @Column("character varying", {
    primary: true,
    name: "biddingstosuppliersid",
    length: 70,
  })
  biddingstosuppliersid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "biddingid",
    nullable: true,
    length: 70,
  })
  biddingid: string | null;

  @Column("character varying", {
    name: "supplierid",
    nullable: true,
    length: 70,
  })
  supplierid: string | null;

  @Column("character varying", {
    name: "invitationstatusid",
    nullable: true,
    length: 70,
  })
  invitationstatusid: string | null;
}
