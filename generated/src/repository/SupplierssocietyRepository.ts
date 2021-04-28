import { EntityRepository, Repository } from "typeorm";
import { Supplierssociety } from "../entity/Supplierssociety";

@EntityRepository(Supplierssociety)
export class SupplierssocietyRepository extends Repository<Supplierssociety> {}
