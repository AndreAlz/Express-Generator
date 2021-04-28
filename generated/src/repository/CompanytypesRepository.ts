import { EntityRepository, Repository } from "typeorm";
import { Companytypes } from "../entity/Companytypes";

@EntityRepository(Companytypes)
export class CompanytypesRepository extends Repository<Companytypes> {}
