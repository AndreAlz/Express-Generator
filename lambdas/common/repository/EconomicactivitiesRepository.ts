import { EntityRepository, Repository } from "typeorm";
import { Economicactivities } from "../entity/Economicactivities";

@EntityRepository(Economicactivities)
export class EconomicactivitiesRepository extends Repository<Economicactivities> {}
