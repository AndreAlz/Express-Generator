import { EntityRepository, Repository } from "typeorm";
import { Suppliers } from "../entity/Suppliers";

@EntityRepository(Suppliers)
export class SuppliersRepository extends Repository<Suppliers> {}
