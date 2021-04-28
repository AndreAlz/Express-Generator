import { EntityRepository, Repository } from "typeorm";
import { Costcentermaterial } from "../entity/Costcentermaterial";

@EntityRepository(Costcentermaterial)
export class CostcentermaterialRepository extends Repository<Costcentermaterial> {}
