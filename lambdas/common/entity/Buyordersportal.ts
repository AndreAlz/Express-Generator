import { Column, Entity, Index } from "typeorm";

@Index("buyordersportal_pkey", ["buyorderportalid"], { unique: true })
@Entity("buyordersportal", { schema: "iprovider" })
export class Buyordersportal {
  @Column("character varying", {
    primary: true,
    name: "buyorderportalid",
    length: 70,
  })
  buyorderportalid: string;

  @Column("timestamp with time zone", { name: "createdate", nullable: true })
  createdate: Date | null;

  @Column("character varying", { name: "winnerid", nullable: true, length: 70 })
  winnerid: string | null;

  @Column("character varying", {
    name: "documentsap",
    nullable: true,
    length: 20,
  })
  documentsap: string | null;

  @Column("character varying", {
    name: "usercreate",
    nullable: true,
    length: 70,
  })
  usercreate: string | null;
}
