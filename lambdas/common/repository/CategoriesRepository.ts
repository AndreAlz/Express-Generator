import { EntityRepository, Repository } from "typeorm";
import { Categories } from "../entity/Categories";

@EntityRepository(Categories)
export class CategoriesRepository extends Repository<Categories> {}
