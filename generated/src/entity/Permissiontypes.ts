import { Column, Entity, Index } from "typeorm";

@Index("permissiontypes_pkey", ["permissiontypeid"], { unique: true })
@Entity("permissiontypes", { schema: "iprovider" })
export class Permissiontypes {
  @Column("character varying", {
    primary: true,
    name: "permissiontypeid",
    length: 70,
  })
  permissiontypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
