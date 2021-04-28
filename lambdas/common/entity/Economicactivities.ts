import { Column, Entity, Index } from "typeorm";

@Index("economicactivities_pkey", ["economicactivityid"], { unique: true })
@Entity("economicactivities", { schema: "iprovider" })
export class Economicactivities {
  @Column("character varying", {
    primary: true,
    name: "economicactivityid",
    length: 70,
  })
  economicactivityid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("character varying", { name: "sunatid", nullable: true, length: 4 })
  sunatid: string | null;
}
