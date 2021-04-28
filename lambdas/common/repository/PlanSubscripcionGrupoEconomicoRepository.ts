import { EntityRepository, Repository } from "typeorm";
import { PlanSubscripcionGrupoEconomico } from "../entity/PlanSubscripcionGrupoEconomico";

@EntityRepository(PlanSubscripcionGrupoEconomico)
export class PlanSubscripcionGrupoEconomicoRepository extends Repository<PlanSubscripcionGrupoEconomico> {}
