import { EntityRepository, Repository } from "typeorm";
import { Apppermissionstopermissiontypes } from "../entity/Apppermissionstopermissiontypes";

@EntityRepository(Apppermissionstopermissiontypes)
export class ApppermissionstopermissiontypesRepository extends Repository<Apppermissionstopermissiontypes> {}
