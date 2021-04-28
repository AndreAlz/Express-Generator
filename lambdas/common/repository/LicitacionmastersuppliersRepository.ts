import { EntityRepository, Repository } from "typeorm";
import { Licitacionmastersuppliers } from "../entity/Licitacionmastersuppliers";

@EntityRepository(Licitacionmastersuppliers)
export class LicitacionmastersuppliersRepository extends Repository<Licitacionmastersuppliers> {}
