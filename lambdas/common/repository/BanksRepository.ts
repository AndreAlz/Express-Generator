import { EntityRepository, Repository } from "typeorm";
import { Banks } from "../entity/Banks";

@EntityRepository(Banks)
export class BanksRepository extends Repository<Banks> {}
