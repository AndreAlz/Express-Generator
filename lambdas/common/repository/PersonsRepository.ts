import { EntityRepository, Repository } from "typeorm";
import { Persons } from "../entity/Persons";

@EntityRepository(Persons)
export class PersonsRepository extends Repository<Persons> {}
