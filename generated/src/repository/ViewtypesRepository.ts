import { EntityRepository, Repository } from "typeorm";
import { Viewtypes } from "../entity/Viewtypes";

@EntityRepository(Viewtypes)
export class ViewtypesRepository extends Repository<Viewtypes> {}
