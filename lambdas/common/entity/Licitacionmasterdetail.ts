import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Fileattachedlicitacion } from "./Fileattachedlicitacion";
import { Licitacionmaster } from "./Licitacionmaster";

@Index("licitacionmasterdetail_pkey", ["licitaciondetailid"], { unique: true })
@Entity("licitacionmasterdetail", { schema: "iprovider" })
export class Licitacionmasterdetail {
  @Column("character varying", {
    primary: true,
    name: "licitaciondetailid",
    length: 70,
  })
  licitaciondetailid: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    name: "materialcode",
    nullable: true,
    length: 20,
  })
  materialcode: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 200,
  })
  description: string | null;

  @Column("numeric", {
    name: "quantity",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  quantity: string | null;

  @Column("numeric", {
    name: "referencialprice",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  referencialprice: string | null;

  @Column("character varying", {
    name: "comments",
    nullable: true,
    length: 500,
  })
  comments: string | null;

  @Column("character varying", { name: "unitid", nullable: true, length: 70 })
  unitid: string | null;

  @OneToMany(
    () => Fileattachedlicitacion,
    (fileattachedlicitacion) => fileattachedlicitacion.licitaciondetail
  )
  fileattachedlicitacions: Fileattachedlicitacion[];

  @ManyToOne(
    () => Licitacionmaster,
    (licitacionmaster) => licitacionmaster.licitacionmasterdetails
  )
  @JoinColumn([{ name: "licitacionid", referencedColumnName: "licitacionid" }])
  licitacion: Licitacionmaster;
}
