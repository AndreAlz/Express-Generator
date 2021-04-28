import { EntityRepository, Repository } from "typeorm";
import { Buyordertypes } from "../entity/Buyordertypes";

@EntityRepository(Buyordertypes)
export class BuyordertypesRepository extends Repository<Buyordertypes> {}
