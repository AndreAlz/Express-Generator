import { EntityRepository, Repository } from "typeorm";
import { Buyorders } from "../entity/Buyorders";

@EntityRepository(Buyorders)
export class BuyordersRepository extends Repository<Buyorders> {}
