import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Licitacionmasterdetail } from "./Licitacionmasterdetail";
import { Licitacionmaster } from "./Licitacionmaster";

@Index("fileattachedlicitacion_pkey", ["fileattachedlicitacionid"], {
  unique: true,
})
@Entity("fileattachedlicitacion", { schema: "iprovider" })
export class Fileattachedlicitacion {
  @Column("character varying", {
    primary: true,
    name: "fileattachedlicitacionid",
    length: 70,
  })
  fileattachedlicitacionid: string;

  @Column("character varying", {
    name: "fileattachedid",
    nullable: true,
    length: 70,
  })
  fileattachedid: string | null;

  @Column("character varying", {
    name: "originalname",
    nullable: true,
    length: 500,
  })
  originalname: string | null;

  @Column("character varying", {
    name: "namefileserver",
    nullable: true,
    length: 500,
  })
  namefileserver: string | null;

  @Column("integer", { name: "size", nullable: true })
  size: number | null;

  @Column("character varying", { name: "extension", nullable: true, length: 5 })
  extension: string | null;

  @Column("character varying", {
    name: "completeurl",
    nullable: true,
    length: 200,
  })
  completeurl: string | null;

  @Column("character varying", { name: "typefile", nullable: true, length: 50 })
  typefile: string | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 500,
  })
  comments: string | null;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "typeattached",
    nullable: true,
    length: 1,
  })
  typeattached: string | null;

  @ManyToOne(
    () => Licitacionmasterdetail,
    (licitacionmasterdetail) => licitacionmasterdetail.fileattachedlicitacions
  )
  @JoinColumn([
    { name: "licitaciondetailid", referencedColumnName: "licitaciondetailid" },
  ])
  licitaciondetail: Licitacionmasterdetail;

  @ManyToOne(
    () => Licitacionmaster,
    (licitacionmaster) => licitacionmaster.fileattachedlicitacions
  )
  @JoinColumn([
    { name: "licitacionmasterid", referencedColumnName: "licitacionid" },
  ])
  licitacionmaster: Licitacionmaster;
}
