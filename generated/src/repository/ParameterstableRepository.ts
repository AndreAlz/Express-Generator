import { EntityRepository, Repository } from "typeorm";
import { Parameterstable } from "../entity/Parameterstable";

@EntityRepository(Parameterstable)
export class ParameterstableRepository extends Repository<Parameterstable> {}
