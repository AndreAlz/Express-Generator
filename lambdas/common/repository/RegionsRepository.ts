import { EntityRepository, Repository } from "typeorm";
import { Regions } from "../entity/Regions";

@EntityRepository(Regions)
export class RegionsRepository extends Repository<Regions> {}
