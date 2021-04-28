import { Column, Entity, Index } from "typeorm";

@Index("customerrors_pkey", ["customerrorid"], { unique: true })
@Entity("customerrors", { schema: "iprovider" })
export class Customerrors {
  @Column("character varying", {
    primary: true,
    name: "customerrorid",
    length: 70,
  })
  customerrorid: string;

  @Column("character varying", {
    name: "dbsystemerrorid",
    nullable: true,
    length: 70,
  })
  dbsystemerrorid: string | null;

  @Column("character varying", {
    name: "customerrormessage",
    nullable: true,
    length: 2000,
  })
  customerrormessage: string | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 1000,
  })
  comments: string | null;
}
