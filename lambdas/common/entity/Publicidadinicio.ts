import { Column, Entity, Index } from "typeorm";

@Index("publicidadinicio_pkey", ["idregistro"], { unique: true })
@Entity("publicidadinicio", { schema: "iprovider" })
export class Publicidadinicio {
  @Column("character varying", {
    primary: true,
    name: "idregistro",
    length: 70,
  })
  idregistro: string;

  @Column("character varying", { name: "tipo", nullable: true, length: 2 })
  tipo: string | null;

  @Column("character varying", { name: "urlimg", nullable: true, length: 200 })
  urlimg: string | null;

  @Column("integer", { name: "orden", nullable: true })
  orden: number | null;

  @Column("character varying", {
    name: "nombrearchivo",
    nullable: true,
    length: 500,
  })
  nombrearchivo: string | null;

  @Column("character varying", {
    name: "extension",
    nullable: true,
    length: 10,
  })
  extension: string | null;
}
