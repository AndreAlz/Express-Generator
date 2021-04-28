import { EntityRepository, Repository } from "typeorm";
import { Typeofsurvey } from "../entity/Typeofsurvey";

@EntityRepository(Typeofsurvey)
export class TypeofsurveyRepository extends Repository<Typeofsurvey> {}
