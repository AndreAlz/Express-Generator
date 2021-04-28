import { Column, Entity, Index } from "typeorm";

@Index("errorlogtemp_pkey", ["errorlogtempid"], { unique: true })
@Entity("errorlogtemp", { schema: "iprovider" })
export class Errorlogtemp {
  @Column("character varying", {
    primary: true,
    name: "errorlogtempid",
    length: 70,
  })
  errorlogtempid: string;

  @Column("character varying", { name: "mensage", nullable: true, length: 500 })
  mensage: string | null;
}
