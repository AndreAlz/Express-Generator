import { Column, Entity, Index } from "typeorm";

@Index("districts_pkey", ["districtid"], { unique: true })
@Entity("districts", { schema: "iprovider" })
export class Districts {
  @Column("character varying", {
    primary: true,
    name: "districtid",
    length: 70,
  })
  districtid: string;

  @Column("character varying", { name: "cityid", nullable: true, length: 70 })
  cityid: string | null;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;
}
