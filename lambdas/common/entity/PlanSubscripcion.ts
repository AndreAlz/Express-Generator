import { Column, Entity, Index, OneToMany } from "typeorm";
import { PlanSubscripcionGrupoEconomico } from "./PlanSubscripcionGrupoEconomico";

@Index("plan_subscripcion_pkey", ["idPlanSubscripcion"], { unique: true })
@Entity("plan_subscripcion", { schema: "iprovider" })
export class PlanSubscripcion {
  @Column("character varying", {
    primary: true,
    name: "id_plan_subscripcion",
    length: 70,
  })
  idPlanSubscripcion: string;

  @Column("character varying", { name: "nombre", length: 150 })
  nombre: string;

  @Column("character varying", { name: "tipo", length: 50 })
  tipo: string;

  @Column("character varying", { name: "cod", length: 50 })
  cod: string;

  @OneToMany(
    () => PlanSubscripcionGrupoEconomico,
    (planSubscripcionGrupoEconomico) =>
      planSubscripcionGrupoEconomico.idPlanSubscripcion
  )
  planSubscripcionGrupoEconomicos: PlanSubscripcionGrupoEconomico[];
}
