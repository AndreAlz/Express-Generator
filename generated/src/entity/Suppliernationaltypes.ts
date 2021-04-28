import { Column, Entity, Index } from "typeorm";

@Index("suppliernationaltypes_pkey", ["suppliernationaltypeid"], {
  unique: true,
})
@Entity("suppliernationaltypes", { schema: "iprovider" })
export class Suppliernationaltypes {
  @Column("character varying", {
    primary: true,
    name: "suppliernationaltypeid",
    length: 70,
  })
  suppliernationaltypeid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;
}
