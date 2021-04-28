import { EntityRepository, Repository } from "typeorm";
import { Serviceagenttypes } from "../entity/Serviceagenttypes";

@EntityRepository(Serviceagenttypes)
export class ServiceagenttypesRepository extends Repository<Serviceagenttypes> {}
