import { Column, Entity, Index } from "typeorm";

@Index("logfacturas_pkey", ["idregistro"], { unique: true })
@Entity("logfacturas", { schema: "iprovider" })
export class Logfacturas {
  @Column("character varying", {
    primary: true,
    name: "idregistro",
    length: 70,
  })
  idregistro: string;

  @Column("timestamp with time zone", { name: "fechahora", nullable: true })
  fechahora: Date | null;

  @Column("character varying", { name: "proceso", nullable: true, length: 200 })
  proceso: string | null;

  @Column("text", { name: "entrada", nullable: true })
  entrada: string | null;

  @Column("text", { name: "salida", nullable: true })
  salida: string | null;

  @Column("time without time zone", { name: "tiemposap", nullable: true })
  tiemposap: string | null;
}
