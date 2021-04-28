import { Column, Entity, Index } from "typeorm";

@Index("fileattached_pkey", ["fileattachedid"], { unique: true })
@Entity("fileattached", { schema: "iprovider" })
export class Fileattached {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "companyid",
    nullable: true,
    length: 70,
  })
  companyid: string | null;

  @Column("character varying", {
    primary: true,
    name: "fileattachedid",
    length: 70,
  })
  fileattachedid: string;

  @Column("character varying", { name: "name", nullable: true, length: 200 })
  name: string | null;

  @Column("character varying", { name: "type", nullable: true, length: 50 })
  type: string | null;

  @Column("integer", { name: "size", nullable: true })
  size: number | null;

  @Column("character varying", {
    name: "extension",
    nullable: true,
    length: 10,
  })
  extension: string | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;

  @Column("text", { name: "content", nullable: true })
  content: string | null;
}
