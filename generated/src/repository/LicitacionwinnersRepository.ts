import { EntityRepository, Repository } from "typeorm";
import { Licitacionwinners } from "../entity/Licitacionwinners";

@EntityRepository(Licitacionwinners)
export class LicitacionwinnersRepository extends Repository<Licitacionwinners> {}
