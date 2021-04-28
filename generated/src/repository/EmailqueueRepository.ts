import { EntityRepository, Repository } from "typeorm";
import { Emailqueue } from "../entity/Emailqueue";

@EntityRepository(Emailqueue)
export class EmailqueueRepository extends Repository<Emailqueue> {}
