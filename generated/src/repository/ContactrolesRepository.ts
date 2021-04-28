import { EntityRepository, Repository } from "typeorm";
import { Contactroles } from "../entity/Contactroles";

@EntityRepository(Contactroles)
export class ContactrolesRepository extends Repository<Contactroles> {}
