import { EntityRepository, Repository } from "typeorm";
import { Supplierstatuses } from "../entity/Supplierstatuses";

@EntityRepository(Supplierstatuses)
export class SupplierstatusesRepository extends Repository<Supplierstatuses> {}
