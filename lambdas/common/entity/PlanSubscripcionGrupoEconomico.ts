import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { GrupoEconomico } from "./GrupoEconomico";
import { PlanSubscripcion } from "./PlanSubscripcion";

@Index(
  "plan_subscripcion_grupo_economico_pkey",
  ["idPlanSubscripcionGrupoEconomico"],
  { unique: true }
)
@Entity("plan_subscripcion_grupo_economico", { schema: "iprovider" })
export class PlanSubscripcionGrupoEconomico {
  @Column("character varying", {
    primary: true,
    name: "id_plan_subscripcion_grupo_economico",
    length: 70,
  })
  idPlanSubscripcionGrupoEconomico: string;

  @Column("date", { name: "fecha_inicio" })
  fechaInicio: string;

  @Column("date", { name: "fecha_fin" })
  fechaFin: string;

  @ManyToOne(
    () => GrupoEconomico,
    (grupoEconomico) => grupoEconomico.planSubscripcionGrupoEconomicos
  )
  @JoinColumn([
    { name: "id_grupo_economico", referencedColumnName: "idGrupoEconomico" },
  ])
  idGrupoEconomico: GrupoEconomico;

  @ManyToOne(
    () => PlanSubscripcion,
    (planSubscripcion) => planSubscripcion.planSubscripcionGrupoEconomicos
  )
  @JoinColumn([
    {
      name: "id_plan_subscripcion",
      referencedColumnName: "idPlanSubscripcion",
    },
  ])
  idPlanSubscripcion: PlanSubscripcion;
}
