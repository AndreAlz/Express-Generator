import { EntityRepository, Repository } from "typeorm";
import { Logconsole } from "../entity/Logconsole";

@EntityRepository(Logconsole)
export class LogconsoleRepository extends Repository<Logconsole> {}
