import { EntityRepository, Repository } from "typeorm";
import { Emailtemplates } from "../entity/Emailtemplates";

@EntityRepository(Emailtemplates)
export class EmailtemplatesRepository extends Repository<Emailtemplates> {}
