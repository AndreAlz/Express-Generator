import { Column, Entity, Index, OneToMany } from "typeorm";
import { Webhooks } from "./Webhooks";

@Index("procesos_iprovider_pkey", ["idProcesosIprovider"], { unique: true })
@Entity("procesos_iprovider", { schema: "iprovider" })
export class ProcesosIprovider {
  @Column("character varying", {
    primary: true,
    name: "id_procesos_iprovider",
    length: 70,
  })
  idProcesosIprovider: string;

  @Column("character varying", { name: "nombre", length: 50 })
  nombre: string;

  @Column("character varying", { name: "cod", length: 50 })
  cod: string;

  @Column("bytea", { name: "sample_json", nullable: true })
  sampleJson: Buffer | null;

  @OneToMany(() => Webhooks, (webhooks) => webhooks.idProcesosIprovider)
  webhooks: Webhooks[];
}
