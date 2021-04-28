import { EntityRepository, Repository } from "typeorm";
import { Warehouses } from "../entity/Warehouses";

@EntityRepository(Warehouses)
export class WarehousesRepository extends Repository<Warehouses> {}
