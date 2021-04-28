import { EntityRepository, Repository } from "typeorm";
import { Formaltreatments } from "../entity/Formaltreatments";

@EntityRepository(Formaltreatments)
export class FormaltreatmentsRepository extends Repository<Formaltreatments> {}
