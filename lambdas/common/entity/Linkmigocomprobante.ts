import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Comprobantessunat } from "./Comprobantessunat";
import { Documentitems } from "./Documentitems";

@Index("linkmigocomprobante_pkey", ["idregistro"], { unique: true })
@Entity("linkmigocomprobante", { schema: "iprovider" })
export class Linkmigocomprobante {
  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("character varying", {
    primary: true,
    name: "idregistro",
    length: 70,
  })
  idregistro: string;

  @Column("integer", { name: "posicioncomprobante", nullable: true })
  posicioncomprobante: number | null;

  @Column("date", { name: "fechalink", nullable: true })
  fechalink: string | null;

  @Column("character varying", {
    name: "documentitemidprebill",
    nullable: true,
    length: 70,
  })
  documentitemidprebill: string | null;

  @OneToOne(
    () => Comprobantessunat,
    (comprobantessunat) => comprobantessunat.linkmigocomprobante
  )
  @JoinColumn([{ name: "idregistro", referencedColumnName: "idregistro" }])
  idregistro2: Comprobantessunat;

  @ManyToOne(
    () => Documentitems,
    (documentitems) => documentitems.linkmigocomprobantes
  )
  @JoinColumn([
    { name: "documentitemid", referencedColumnName: "documentitemid" },
  ])
  documentitem: Documentitems;
}
