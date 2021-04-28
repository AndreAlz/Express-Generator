import { EntityRepository, Repository } from "typeorm";
import { Specialroles } from "../entity/Specialroles";

@EntityRepository(Specialroles)
export class SpecialrolesRepository extends Repository<Specialroles> {}
