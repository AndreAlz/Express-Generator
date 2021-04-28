import { EntityRepository, Repository } from "typeorm";
import { Taxnumbertypes } from "../entity/Taxnumbertypes";

@EntityRepository(Taxnumbertypes)
export class TaxnumbertypesRepository extends Repository<Taxnumbertypes> {}
