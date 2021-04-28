import { EntityRepository, Repository } from "typeorm";
import { Logdberrors } from "../entity/Logdberrors";

@EntityRepository(Logdberrors)
export class LogdberrorsRepository extends Repository<Logdberrors> {}
