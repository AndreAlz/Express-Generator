import { Column, Entity, Index } from "typeorm";

@Index("documentitempartials_pkey", ["documentitempartialsid"], {
  unique: true,
})
@Entity("documentitempartials", { schema: "iprovider" })
export class Documentitempartials {
  @Column("character varying", {
    primary: true,
    name: "documentitempartialsid",
    length: 70,
  })
  documentitempartialsid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "documentitemid",
    nullable: true,
    length: 70,
  })
  documentitemid: string | null;

  @Column("smallint", { name: "unittotal", nullable: true })
  unittotal: number | null;

  @Column("smallint", { name: "unitclosed", nullable: true })
  unitclosed: number | null;
}
