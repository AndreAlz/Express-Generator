import { EntityRepository, Repository } from "typeorm";
import { Deductiontypestosuppliers } from "../entity/Deductiontypestosuppliers";

@EntityRepository(Deductiontypestosuppliers)
export class DeductiontypestosuppliersRepository extends Repository<Deductiontypestosuppliers> {}
