import { EntityRepository, Repository } from "typeorm";
import { Documentitemstatuses } from "../entity/Documentitemstatuses";

@EntityRepository(Documentitemstatuses)
export class DocumentitemstatusesRepository extends Repository<Documentitemstatuses> {}
