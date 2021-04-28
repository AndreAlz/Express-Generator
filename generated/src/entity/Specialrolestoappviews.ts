import { Column, Entity, Index } from "typeorm";

@Index("specialrolestoappviews_pkey", ["specialrolestoappviewsid"], {
  unique: true,
})
@Entity("specialrolestoappviews", { schema: "iprovider" })
export class Specialrolestoappviews {
  @Column("character varying", {
    primary: true,
    name: "specialrolestoappviewsid",
    length: 70,
  })
  specialrolestoappviewsid: string;

  @Column("character varying", {
    name: "specialroleid",
    nullable: true,
    length: 70,
  })
  specialroleid: string | null;

  @Column("character varying", { name: "viewid", nullable: true, length: 70 })
  viewid: string | null;
}
