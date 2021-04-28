import { EntityRepository, Repository } from "typeorm";
import { Questiontypes } from "../entity/Questiontypes";

@EntityRepository(Questiontypes)
export class QuestiontypesRepository extends Repository<Questiontypes> {}
