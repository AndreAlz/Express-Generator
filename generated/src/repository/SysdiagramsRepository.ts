import { EntityRepository, Repository } from "typeorm";
import { Sysdiagrams } from "../entity/Sysdiagrams";

@EntityRepository(Sysdiagrams)
export class SysdiagramsRepository extends Repository<Sysdiagrams> {}
