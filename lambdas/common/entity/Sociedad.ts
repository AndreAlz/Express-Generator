import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ContactoSociedad } from "./ContactoSociedad";
import { GrupoEconomico } from "./GrupoEconomico";

@Index("sociedad_pkey", ["idSociedad"], { unique: true })
@Entity("sociedad", { schema: "iprovider" })
export class Sociedad {
  @Column("character varying", {
    primary: true,
    name: "id_sociedad",
    length: 70,
  })
  idSociedad: string;

  @Column("character varying", { name: "razon_social", length: 150 })
  razonSocial: string;

  @Column("character varying", { name: "nombre_comercial", length: 150 })
  nombreComercial: string;

  @Column("character varying", { name: "ruc", length: 50 })
  ruc: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @OneToMany(
    () => ContactoSociedad,
    (contactoSociedad) => contactoSociedad.idSociedad
  )
  contactoSociedads: ContactoSociedad[];

  @ManyToOne(() => GrupoEconomico, (grupoEconomico) => grupoEconomico.sociedads)
  @JoinColumn([
    { name: "id_grupo_economico", referencedColumnName: "idGrupoEconomico" },
  ])
  idGrupoEconomico: GrupoEconomico;
}
