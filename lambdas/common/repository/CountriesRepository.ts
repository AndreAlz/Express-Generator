import { EntityRepository, Repository } from "typeorm";
import { Countries } from "../entity/Countries";

@EntityRepository(Countries)
export class CountriesRepository extends Repository<Countries> {}
