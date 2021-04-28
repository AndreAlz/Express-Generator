import { EntityRepository, Repository } from "typeorm";
import { Buyordersportal } from "../entity/Buyordersportal";

@EntityRepository(Buyordersportal)
export class BuyordersportalRepository extends Repository<Buyordersportal> {}
