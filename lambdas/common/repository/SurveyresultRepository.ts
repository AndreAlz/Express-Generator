import { EntityRepository, Repository } from "typeorm";
import { Surveyresult } from "../entity/Surveyresult";

@EntityRepository(Surveyresult)
export class SurveyresultRepository extends Repository<Surveyresult> {}
