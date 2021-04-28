import { EntityRepository, Repository } from "typeorm";
import { Logwebservices } from "../entity/Logwebservices";

@EntityRepository(Logwebservices)
export class LogwebservicesRepository extends Repository<Logwebservices> {}
