import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Comprobantessunat } from "./Comprobantessunat";

@Index("comprobantesprocesados_pkey", ["idprocesado"], { unique: true })
@Entity("comprobantesprocesados", { schema: "iprovider" })
export class Comprobantesprocesados {
  @Column("character varying", {
    primary: true,
    name: "idprocesado",
    length: 70,
  })
  idprocesado: string;

  @Column("timestamp without time zone", {
    name: "fechaproceso",
    nullable: true,
  })
  fechaproceso: Date | null;

  @Column("character varying", {
    name: "usuarioproceso",
    nullable: true,
    length: 70,
  })
  usuarioproceso: string | null;

  @Column("character varying", { name: "erpcode", nullable: true, length: 10 })
  erpcode: string | null;

  @ManyToOne(
    () => Comprobantessunat,
    (comprobantessunat) => comprobantessunat.comprobantesprocesados
  )
  @JoinColumn([{ name: "idregistro", referencedColumnName: "idregistro" }])
  idregistro: Comprobantessunat;
}
