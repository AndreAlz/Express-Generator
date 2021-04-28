import { EntityRepository, Repository } from "typeorm";
import { Testaccounts } from "../entity/Testaccounts";

@EntityRepository(Testaccounts)
export class TestaccountsRepository extends Repository<Testaccounts> {}
