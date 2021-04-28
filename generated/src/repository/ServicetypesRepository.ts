import { EntityRepository, Repository } from "typeorm";
import { Servicetypes } from "../entity/Servicetypes";

@EntityRepository(Servicetypes)
export class ServicetypesRepository extends Repository<Servicetypes> {}
