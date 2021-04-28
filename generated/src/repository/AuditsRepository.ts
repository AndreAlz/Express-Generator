import { EntityRepository, Repository } from "typeorm";
import { Audits } from "../entity/Audits";

@EntityRepository(Audits)
export class AuditsRepository extends Repository<Audits> {}
