import { EntityRepository, Repository } from "typeorm";
import { Suppliercategories } from "../entity/Suppliercategories";

@EntityRepository(Suppliercategories)
export class SuppliercategoriesRepository extends Repository<Suppliercategories> {}
