import { Column, Entity, Index } from "typeorm";

@Index("countries_pkey", ["countryid"], { unique: true })
@Entity("countries", { schema: "iprovider" })
export class Countries {
  @Column("character varying", { primary: true, name: "countryid", length: 70 })
  countryid: string;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;

  @Column("character varying", {
    name: "exonymlanguageid",
    nullable: true,
    length: 70,
  })
  exonymlanguageid: string | null;

  @Column("character varying", { name: "isoalpha2", nullable: true, length: 2 })
  isoalpha2: string | null;

  @Column("character varying", { name: "isoalpha3", nullable: true, length: 3 })
  isoalpha3: string | null;

  @Column("character varying", {
    name: "isonumeric",
    nullable: true,
    length: 3,
  })
  isonumeric: string | null;
}
