import { EntityRepository, Repository } from "typeorm";
import { Currencies } from "../entity/Currencies";

@EntityRepository(Currencies)
export class CurrenciesRepository extends Repository<Currencies> {}
