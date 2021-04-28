import { EntityRepository, Repository } from "typeorm";
import { Logfacturas } from "../entity/Logfacturas";

@EntityRepository(Logfacturas)
export class LogfacturasRepository extends Repository<Logfacturas> {}
