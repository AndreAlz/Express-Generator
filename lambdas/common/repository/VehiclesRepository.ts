import { EntityRepository, Repository } from "typeorm";
import { Vehicles } from "../entity/Vehicles";

@EntityRepository(Vehicles)
export class VehiclesRepository extends Repository<Vehicles> {}
