import { EntityRepository, Repository } from "typeorm";
import { Costcenter } from "../entity/Costcenter";

@EntityRepository(Costcenter)
export class CostcenterRepository extends Repository<Costcenter> {}
