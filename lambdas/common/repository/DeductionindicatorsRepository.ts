import { EntityRepository, Repository } from "typeorm";
import { Deductionindicators } from "../entity/Deductionindicators";

@EntityRepository(Deductionindicators)
export class DeductionindicatorsRepository extends Repository<Deductionindicators> {}
