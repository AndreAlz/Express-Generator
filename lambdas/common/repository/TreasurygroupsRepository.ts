import { EntityRepository, Repository } from "typeorm";
import { Treasurygroups } from "../entity/Treasurygroups";

@EntityRepository(Treasurygroups)
export class TreasurygroupsRepository extends Repository<Treasurygroups> {}
