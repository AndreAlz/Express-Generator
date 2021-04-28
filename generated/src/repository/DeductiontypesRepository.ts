import { EntityRepository, Repository } from "typeorm";
import { Deductiontypes } from "../entity/Deductiontypes";

@EntityRepository(Deductiontypes)
export class DeductiontypesRepository extends Repository<Deductiontypes> {}
