import { EntityRepository, Repository } from "typeorm";
import { Taxtypes } from "../entity/Taxtypes";

@EntityRepository(Taxtypes)
export class TaxtypesRepository extends Repository<Taxtypes> {}
