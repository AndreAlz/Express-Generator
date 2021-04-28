import { Column, Entity, Index } from "typeorm";

@Index("appviews_pkey", ["viewid"], { unique: true })
@Entity("appviews", { schema: "iprovider" })
export class Appviews {
  @Column("character varying", { primary: true, name: "viewid", length: 70 })
  viewid: string;

  @Column("character varying", {
    name: "viewname",
    nullable: true,
    length: 200,
  })
  viewname: string | null;

  @Column("character varying", {
    name: "viewurl",
    nullable: true,
    length: 2000,
  })
  viewurl: string | null;

  @Column("character varying", {
    name: "longdescription",
    nullable: true,
    length: 500,
  })
  longdescription: string | null;

  @Column("character varying", {
    name: "parentviewid",
    nullable: true,
    length: 70,
  })
  parentviewid: string | null;

  @Column("character varying", { name: "classcol", nullable: true, length: 50 })
  classcol: string | null;

  @Column("character varying", {
    name: "iconurl",
    nullable: true,
    length: 2000,
  })
  iconurl: string | null;

  @Column("character varying", {
    name: "viewtypeid",
    nullable: true,
    length: 70,
  })
  viewtypeid: string | null;

  @Column("integer", { name: "vieworder", nullable: true })
  vieworder: number | null;
}
