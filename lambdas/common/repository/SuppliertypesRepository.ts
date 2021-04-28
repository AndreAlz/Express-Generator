import { EntityRepository, Repository } from "typeorm";
import { Suppliertypes } from "../entity/Suppliertypes";

@EntityRepository(Suppliertypes)
export class SuppliertypesRepository extends Repository<Suppliertypes> {}
