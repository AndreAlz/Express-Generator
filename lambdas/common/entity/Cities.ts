import { Column, Entity, Index } from "typeorm";

@Index("cities_pkey", ["cityid"], { unique: true })
@Entity("cities", { schema: "iprovider" })
export class Cities {
  @Column("character varying", { primary: true, name: "cityid", length: 70 })
  cityid: string;

  @Column("character varying", {
    name: "countryid",
    nullable: true,
    length: 70,
  })
  countryid: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;
}
