import { EntityRepository, Repository } from "typeorm";
import { Incoterms } from "../entity/Incoterms";

@EntityRepository(Incoterms)
export class IncotermsRepository extends Repository<Incoterms> {}
