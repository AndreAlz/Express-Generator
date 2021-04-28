import { Column, Entity, Index } from "typeorm";

@Index("logconsole_pkey", ["id"], { unique: true })
@Entity("logconsole", { schema: "iprovider" })
export class Logconsole {
  @Column("character varying", { primary: true, name: "id", length: 70 })
  id: string;

  @Column("timestamp with time zone", {
    name: "fechaejecucion",
    nullable: true,
  })
  fechaejecucion: Date | null;

  @Column("character varying", { name: "proceso", nullable: true, length: 200 })
  proceso: string | null;

  @Column("timestamp with time zone", { name: "finejecucion", nullable: true })
  finejecucion: Date | null;

  @Column("boolean", { name: "estado", nullable: true })
  estado: boolean | null;

  @Column("text", { name: "mensajeerror", nullable: true })
  mensajeerror: string | null;
}
