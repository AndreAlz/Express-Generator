import { EntityRepository, Repository } from "typeorm";
import { Supplierservices } from "../entity/Supplierservices";

@EntityRepository(Supplierservices)
export class SupplierservicesRepository extends Repository<Supplierservices> {}
