import { EntityRepository, Repository } from "typeorm";
import { Supplierconfidentiality } from "../entity/Supplierconfidentiality";

@EntityRepository(Supplierconfidentiality)
export class SupplierconfidentialityRepository extends Repository<Supplierconfidentiality> {}
