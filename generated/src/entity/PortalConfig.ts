import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { GrupoEconomico } from "./GrupoEconomico";

@Index("portal_config_pkey", ["idPortalConfig"], { unique: true })
@Entity("portal_config", { schema: "iprovider" })
export class PortalConfig {
  @Column("character varying", {
    primary: true,
    name: "id_portal_config",
    length: 70,
  })
  idPortalConfig: string;

  @Column("character varying", { name: "nombre", length: 150 })
  nombre: string;

  @Column("character varying", { name: "colores", length: 150 })
  colores: string;

  @Column("character varying", {
    name: "foto_url",
    nullable: true,
    length: 250,
  })
  fotoUrl: string | null;

  @Column("integer", { name: "clientid" })
  clientid: number;

  @ManyToOne(
    () => GrupoEconomico,
    (grupoEconomico) => grupoEconomico.portalConfigs
  )
  @JoinColumn([
    { name: "id_grupo_economico", referencedColumnName: "idGrupoEconomico" },
  ])
  idGrupoEconomico: GrupoEconomico;
}
