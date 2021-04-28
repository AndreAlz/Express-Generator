import { EntityRepository, Repository } from "typeorm";
import { Questionmultiplechoices } from "../entity/Questionmultiplechoices";

@EntityRepository(Questionmultiplechoices)
export class QuestionmultiplechoicesRepository extends Repository<Questionmultiplechoices> {}
