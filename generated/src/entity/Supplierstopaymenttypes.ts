import { Column, Entity, Index } from "typeorm";

@Index("supplierstopaymenttypes_pkey", ["supplierstopaymenttypesid"], {
  unique: true,
})
@Entity("supplierstopaymenttypes", { schema: "iprovider" })
export class Supplierstopaymenttypes {
  @Column("character varying", {
    primary: true,
    name: "supplierstopaymenttypesid",
    length: 70,
  })
  supplierstopaymenttypesid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "supplierid",
    nullable: true,
    length: 70,
  })
  supplierid: string | null;

  @Column("character varying", {
    name: "paymenttypeid",
    nullable: true,
    length: 70,
  })
  paymenttypeid: string | null;
}
