import { EntityRepository, Repository } from "typeorm";
import { Licitacionevents } from "../entity/Licitacionevents";

@EntityRepository(Licitacionevents)
export class LicitacioneventsRepository extends Repository<Licitacionevents> {}
