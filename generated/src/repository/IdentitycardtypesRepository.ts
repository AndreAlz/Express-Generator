import { EntityRepository, Repository } from "typeorm";
import { Identitycardtypes } from "../entity/Identitycardtypes";

@EntityRepository(Identitycardtypes)
export class IdentitycardtypesRepository extends Repository<Identitycardtypes> {}
