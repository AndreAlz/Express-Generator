import { EntityRepository, Repository } from "typeorm";
import { Licitacionmasterhistory } from "../entity/Licitacionmasterhistory";

@EntityRepository(Licitacionmasterhistory)
export class LicitacionmasterhistoryRepository extends Repository<Licitacionmasterhistory> {}
