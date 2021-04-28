import { EntityRepository, Repository } from "typeorm";
import { Rolestopermissions } from "../entity/Rolestopermissions";

@EntityRepository(Rolestopermissions)
export class RolestopermissionsRepository extends Repository<Rolestopermissions> {}
