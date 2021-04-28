import { EntityRepository, Repository } from "typeorm";
import { Buyerorganizations } from "../entity/Buyerorganizations";

@EntityRepository(Buyerorganizations)
export class BuyerorganizationsRepository extends Repository<Buyerorganizations> {}
