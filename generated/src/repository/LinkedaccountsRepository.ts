import { EntityRepository, Repository } from "typeorm";
import { Linkedaccounts } from "../entity/Linkedaccounts";

@EntityRepository(Linkedaccounts)
export class LinkedaccountsRepository extends Repository<Linkedaccounts> {}
