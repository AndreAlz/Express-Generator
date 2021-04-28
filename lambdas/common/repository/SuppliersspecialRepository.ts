import { EntityRepository, Repository } from "typeorm";
import { Suppliersspecial } from "../entity/Suppliersspecial";

@EntityRepository(Suppliersspecial)
export class SuppliersspecialRepository extends Repository<Suppliersspecial> {}
