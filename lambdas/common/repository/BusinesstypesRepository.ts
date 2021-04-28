import { EntityRepository, Repository } from "typeorm";
import { Businesstypes } from "../entity/Businesstypes";

@EntityRepository(Businesstypes)
export class BusinesstypesRepository extends Repository<Businesstypes> {}
