import { EntityRepository, Repository } from "typeorm";
import { Waybilltypes } from "../entity/Waybilltypes";

@EntityRepository(Waybilltypes)
export class WaybilltypesRepository extends Repository<Waybilltypes> {}
