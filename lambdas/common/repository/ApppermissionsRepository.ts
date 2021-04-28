import { EntityRepository, Repository } from "typeorm";
import { Apppermissions } from "../entity/Apppermissions";

@EntityRepository(Apppermissions)
export class ApppermissionsRepository extends Repository<Apppermissions> {}
