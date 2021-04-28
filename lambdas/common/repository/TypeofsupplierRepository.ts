import { EntityRepository, Repository } from "typeorm";
import { Typeofsupplier } from "../entity/Typeofsupplier";

@EntityRepository(Typeofsupplier)
export class TypeofsupplierRepository extends Repository<Typeofsupplier> {}
