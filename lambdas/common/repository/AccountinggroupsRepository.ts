import { EntityRepository, Repository } from "typeorm";
import { Accountinggroups } from "../entity/Accountinggroups";

@EntityRepository(Accountinggroups)
export class AccountinggroupsRepository extends Repository<Accountinggroups> {}
