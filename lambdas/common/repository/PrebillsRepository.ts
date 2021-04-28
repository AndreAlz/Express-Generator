import { EntityRepository, Repository } from "typeorm";
import { Prebills } from "../entity/Prebills";

@EntityRepository(Prebills)
export class PrebillsRepository extends Repository<Prebills> {}
