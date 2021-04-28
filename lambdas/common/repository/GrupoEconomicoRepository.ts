import { EntityRepository, Repository } from "typeorm";
import { GrupoEconomico } from "../entity/GrupoEconomico";

@EntityRepository(GrupoEconomico)
export class GrupoEconomicoRepository extends Repository<GrupoEconomico> {}
