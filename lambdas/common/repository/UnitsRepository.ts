import { EntityRepository, Repository } from "typeorm";
import { Units } from "../entity/Units";

@EntityRepository(Units)
export class UnitsRepository extends Repository<Units> {}
