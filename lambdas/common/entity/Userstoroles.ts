import { Column, Entity, Index } from "typeorm";

@Index("userstoroles_pkey", ["userstorolesid"], { unique: true })
@Entity("userstoroles", { schema: "iprovider" })
export class Userstoroles {
  @Column("character varying", {
    primary: true,
    name: "userstorolesid",
    length: 70,
  })
  userstorolesid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", { name: "userid", nullable: true, length: 70 })
  userid: string | null;

  @Column("character varying", { name: "roleid", nullable: true, length: 70 })
  roleid: string | null;
}
