import { EntityRepository, Repository } from "typeorm";
import { Biddingstosurveyresults } from "../entity/Biddingstosurveyresults";

@EntityRepository(Biddingstosurveyresults)
export class BiddingstosurveyresultsRepository extends Repository<Biddingstosurveyresults> {}
