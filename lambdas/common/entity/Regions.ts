import { Column, Entity, Index } from "typeorm";

@Index("regions_pkey", ["regionid"], { unique: true })
@Entity("regions", { schema: "iprovider" })
export class Regions {
  @Column("character varying", { primary: true, name: "regionid", length: 70 })
  regionid: string;

  @Column("character varying", {
    name: "countryid",
    nullable: true,
    length: 70,
  })
  countryid: string | null;

  @Column("character varying", {
    name: "regionsapid",
    nullable: true,
    length: 15,
  })
  regionsapid: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;
}
