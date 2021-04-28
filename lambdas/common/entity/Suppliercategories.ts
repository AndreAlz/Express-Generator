import { Column, Entity, Index } from "typeorm";

@Index("suppliercategories_pkey", ["suppliercategoriesid"], { unique: true })
@Entity("suppliercategories", { schema: "iprovider" })
export class Suppliercategories {
  @Column("character varying", {
    primary: true,
    name: "suppliercategoriesid",
    length: 70,
  })
  suppliercategoriesid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", {
    name: "categoryid",
    nullable: true,
    length: 70,
  })
  categoryid: string | null;
}
