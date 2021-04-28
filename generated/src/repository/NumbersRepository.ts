import { EntityRepository, Repository } from "typeorm";
import { Numbers } from "../entity/Numbers";

@EntityRepository(Numbers)
export class NumbersRepository extends Repository<Numbers> {}
