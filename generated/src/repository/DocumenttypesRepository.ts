import { EntityRepository, Repository } from "typeorm";
import { Documenttypes } from "../entity/Documenttypes";

@EntityRepository(Documenttypes)
export class DocumenttypesRepository extends Repository<Documenttypes> {}
