import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { GrupoEconomico } from "./GrupoEconomico";
import { ProcesosIprovider } from "./ProcesosIprovider";

@Index("webhooks_pkey", ["idWebhooks"], { unique: true })
@Entity("webhooks", { schema: "iprovider" })
export class Webhooks {
  @Column("character varying", {
    primary: true,
    name: "id_webhooks",
    length: 70,
  })
  idWebhooks: string;

  @Column("character varying", { name: "nombre", length: 150 })
  nombre: string;

  @Column("character varying", { name: "url_service", length: 300 })
  urlService: string;

  @Column("character varying", { name: "protocolo", length: 20 })
  protocolo: string;

  @Column("character varying", { name: "clientid", nullable: true, length: 70 })
  clientid: string | null;

  @ManyToOne(() => GrupoEconomico, (grupoEconomico) => grupoEconomico.webhooks)
  @JoinColumn([
    { name: "id_grupo_economico", referencedColumnName: "idGrupoEconomico" },
  ])
  idGrupoEconomico: GrupoEconomico;

  @ManyToOne(
    () => ProcesosIprovider,
    (procesosIprovider) => procesosIprovider.webhooks
  )
  @JoinColumn([
    {
      name: "id_procesos_iprovider",
      referencedColumnName: "idProcesosIprovider",
    },
  ])
  idProcesosIprovider: ProcesosIprovider;
}
