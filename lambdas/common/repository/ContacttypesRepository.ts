import { EntityRepository, Repository } from "typeorm";
import { Contacttypes } from "../entity/Contacttypes";

@EntityRepository(Contacttypes)
export class ContacttypesRepository extends Repository<Contacttypes> {}
