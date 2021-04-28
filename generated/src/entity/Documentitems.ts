import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Costcentermaterial } from "./Costcentermaterial";
import { Linkmigocomprobante } from "./Linkmigocomprobante";

@Index("documentitems_pkey", ["documentitemid"], { unique: true })
@Entity("documentitems", { schema: "iprovider" })
export class Documentitems {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "documentitemid",
    length: 70,
  })
  documentitemid: string;

  @Column("character varying", {
    name: "documentid",
    nullable: true,
    length: 70,
  })
  documentid: string | null;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 1000,
  })
  description: string | null;

  @Column("numeric", {
    name: "amount",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  amount: string | null;

  @Column("numeric", {
    name: "quantity",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  quantity: string | null;

  @Column("integer", { name: "unitid", nullable: true })
  unitid: number | null;

  @Column("integer", { name: "taxtypeid", nullable: true })
  taxtypeid: number | null;

  @Column("boolean", { name: "closed", nullable: true, default: () => "false" })
  closed: boolean | null;

  @Column("integer", { name: "documentitemstatusid", nullable: true })
  documentitemstatusid: number | null;

  @Column("numeric", {
    name: "quantityclosed",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  quantityclosed: string | null;

  @Column("numeric", {
    name: "quantitydelivered",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  quantitydelivered: string | null;

  @Column("character varying", {
    name: "sapposition",
    nullable: true,
    length: 20,
  })
  sapposition: string | null;

  @Column("character varying", {
    name: "parentdocumentitemid",
    nullable: true,
    length: 70,
  })
  parentdocumentitemid: string | null;

  @Column("character varying", {
    name: "materialcode",
    nullable: true,
    length: 50,
  })
  materialcode: string | null;

  @Column("numeric", {
    name: "unitprice",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  unitprice: string | null;

  @Column("numeric", {
    name: "taxamount",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  taxamount: string | null;

  @Column("character varying", {
    name: "sapposition2",
    nullable: true,
    length: 20,
  })
  sapposition2: string | null;

  @Column("numeric", {
    name: "taxisc",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  taxisc: string | null;

  @Column("numeric", {
    name: "unitpricediscount",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  unitpricediscount: string | null;

  @Column("boolean", {
    name: "esactivofijo",
    nullable: true,
    default: () => "false",
  })
  esactivofijo: boolean | null;

  @Column("numeric", {
    name: "taxivap",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  taxivap: string | null;

  @Column("numeric", {
    name: "taxother",
    nullable: true,
    precision: 18,
    scale: 4,
  })
  taxother: string | null;

  @ManyToOne(
    () => Costcentermaterial,
    (costcentermaterial) => costcentermaterial.documentitems
  )
  @JoinColumn([
    {
      name: "costcentermaterialid",
      referencedColumnName: "costcentermaterialid",
    },
  ])
  costcentermaterial: Costcentermaterial;

  @OneToMany(
    () => Linkmigocomprobante,
    (linkmigocomprobante) => linkmigocomprobante.documentitem
  )
  linkmigocomprobantes: Linkmigocomprobante[];
}
