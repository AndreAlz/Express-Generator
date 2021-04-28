import { EntityRepository, Repository } from "typeorm";
import { Suppliersaudit } from "../entity/Suppliersaudit";

@EntityRepository(Suppliersaudit)
export class SuppliersauditRepository extends Repository<Suppliersaudit> {}
