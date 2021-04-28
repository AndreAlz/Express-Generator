import { EntityRepository, Repository } from "typeorm";
import { Surveys } from "../entity/Surveys";

@EntityRepository(Surveys)
export class SurveysRepository extends Repository<Surveys> {}
