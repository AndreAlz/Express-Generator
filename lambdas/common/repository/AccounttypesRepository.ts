import { EntityRepository, Repository } from "typeorm";
import { Accounttypes } from "../entity/Accounttypes";

@EntityRepository(Accounttypes)
export class AccounttypesRepository extends Repository<Accounttypes> {}
