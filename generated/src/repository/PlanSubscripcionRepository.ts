import { EntityRepository, Repository } from "typeorm";
import { PlanSubscripcion } from "../entity/PlanSubscripcion";

@EntityRepository(PlanSubscripcion)
export class PlanSubscripcionRepository extends Repository<PlanSubscripcion> {}
