import { Column, Entity, Index } from "typeorm";

@Index("categories_pkey", ["categoryid"], { unique: true })
@Entity("categories", { schema: "iprovider" })
export class Categories {
  @Column("character varying", {
    primary: true,
    name: "categoryid",
    length: 70,
  })
  categoryid: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 250,
  })
  description: string | null;
}
