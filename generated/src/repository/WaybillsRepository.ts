import { EntityRepository, Repository } from "typeorm";
import { Waybills } from "../entity/Waybills";

@EntityRepository(Waybills)
export class WaybillsRepository extends Repository<Waybills> {}
