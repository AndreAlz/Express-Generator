import { EntityRepository, Repository } from "typeorm";
import { Questions } from "../entity/Questions";

@EntityRepository(Questions)
export class QuestionsRepository extends Repository<Questions> {}
