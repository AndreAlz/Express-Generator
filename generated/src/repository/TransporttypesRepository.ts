import { EntityRepository, Repository } from "typeorm";
import { Transporttypes } from "../entity/Transporttypes";

@EntityRepository(Transporttypes)
export class TransporttypesRepository extends Repository<Transporttypes> {}
