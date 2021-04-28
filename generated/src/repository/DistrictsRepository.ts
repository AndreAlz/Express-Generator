import { EntityRepository, Repository } from "typeorm";
import { Districts } from "../entity/Districts";

@EntityRepository(Districts)
export class DistrictsRepository extends Repository<Districts> {}
