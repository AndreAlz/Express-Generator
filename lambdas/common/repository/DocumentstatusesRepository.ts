import { EntityRepository, Repository } from "typeorm";
import { Documentstatuses } from "../entity/Documentstatuses";

@EntityRepository(Documentstatuses)
export class DocumentstatusesRepository extends Repository<Documentstatuses> {}
