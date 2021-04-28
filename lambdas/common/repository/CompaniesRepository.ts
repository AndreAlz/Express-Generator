import { EntityRepository, Repository } from "typeorm";
import { Companies } from "../entity/Companies";

@EntityRepository(Companies)
export class CompaniesRepository extends Repository<Companies> {}
