import { EntityRepository, Repository } from "typeorm";
import { Userstoroles } from "../entity/Userstoroles";

@EntityRepository(Userstoroles)
export class UserstorolesRepository extends Repository<Userstoroles> {}
