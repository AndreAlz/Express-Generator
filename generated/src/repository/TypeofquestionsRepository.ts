import { EntityRepository, Repository } from "typeorm";
import { Typeofquestions } from "../entity/Typeofquestions";

@EntityRepository(Typeofquestions)
export class TypeofquestionsRepository extends Repository<Typeofquestions> {}
