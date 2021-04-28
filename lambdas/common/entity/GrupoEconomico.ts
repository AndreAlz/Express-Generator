import { Column, Entity, Index, OneToMany } from "typeorm";
import { PlanSubscripcionGrupoEconomico } from "./PlanSubscripcionGrupoEconomico";
import { PortalConfig } from "./PortalConfig";
import { Sociedad } from "./Sociedad";
import { Webhooks } from "./Webhooks";

@Index("grupo_economico_pkey", ["idGrupoEconomico"], { unique: true })
@Entity("grupo_economico", { schema: "iprovider" })
export class GrupoEconomico {
  @Column("character varying", {
    primary: true,
    name: "id_grupo_economico",
    length: 70,
  })
  idGrupoEconomico: string;

  @Column("character varying", { name: "nombre", length: 150 })
  nombre: string;

  @Column("character varying", {
    name: "direccion",
    nullable: true,
    length: 250,
  })
  direccion: string | null;

  @Column("character varying", { name: "ruc_matriz", length: 50 })
  rucMatriz: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @Column("timestamp without time zone", { name: "fecha_registro" })
  fechaRegistro: Date;

  @OneToMany(
    () => PlanSubscripcionGrupoEconomico,
    (planSubscripcionGrupoEconomico) =>
      planSubscripcionGrupoEconomico.idGrupoEconomico
  )
  planSubscripcionGrupoEconomicos: PlanSubscripcionGrupoEconomico[];

  @OneToMany(
    () => PortalConfig,
    (portalConfig) => portalConfig.idGrupoEconomico
  )
  portalConfigs: PortalConfig[];

  @OneToMany(() => Sociedad, (sociedad) => sociedad.idGrupoEconomico)
  sociedads: Sociedad[];

  @OneToMany(() => Webhooks, (webhooks) => webhooks.idGrupoEconomico)
  webhooks: Webhooks[];
}
