import { EntityRepository, Repository } from "typeorm";
import { Cities } from "../entity/Cities";

@EntityRepository(Cities)
export class CitiesRepository extends Repository<Cities> {}
