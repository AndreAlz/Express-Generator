import { Column, Entity, Index } from "typeorm";

@Index(
  "apppermissionstopermissiontypes_pkey",
  ["apppermissionstopermissiontypesid"],
  { unique: true }
)
@Entity("apppermissionstopermissiontypes", { schema: "iprovider" })
export class Apppermissionstopermissiontypes {
  @Column("character varying", {
    primary: true,
    name: "apppermissionstopermissiontypesid",
    length: 70,
  })
  apppermissionstopermissiontypesid: string;

  @Column("character varying", {
    name: "permissionid",
    nullable: true,
    length: 70,
  })
  permissionid: string | null;

  @Column("character varying", {
    name: "permissiontypeid",
    nullable: true,
    length: 70,
  })
  permissiontypeid: string | null;
}
