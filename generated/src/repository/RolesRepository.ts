import { EntityRepository, Repository } from "typeorm";
import { Roles } from "../entity/Roles";

@EntityRepository(Roles)
export class RolesRepository extends Repository<Roles> {}
