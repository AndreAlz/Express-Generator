import { EntityRepository, Repository } from "typeorm";
import { Surveytemplates } from "../entity/Surveytemplates";

@EntityRepository(Surveytemplates)
export class SurveytemplatesRepository extends Repository<Surveytemplates> {}
