import { EntityRepository, Repository } from "typeorm";
import { Bankaccounts } from "../entity/Bankaccounts";

@EntityRepository(Bankaccounts)
export class BankaccountsRepository extends Repository<Bankaccounts> {}
