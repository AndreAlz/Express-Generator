import { Column, Entity, Index } from "typeorm";

@Index("logprocesos_pkey", ["idproceso"], { unique: true })
@Entity("logprocesos", { schema: "iprovider" })
export class Logprocesos {
  @Column("character varying", { primary: true, name: "idproceso", length: 70 })
  idproceso: string;

  @Column("character varying", { name: "proceso", nullable: true, length: 50 })
  proceso: string | null;

  @Column("timestamp with time zone", { name: "fecharegistro", nullable: true })
  fecharegistro: Date | null;

  @Column("time without time zone", { name: "duracion", nullable: true })
  duracion: string | null;
}
