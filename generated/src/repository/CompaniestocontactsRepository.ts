import { EntityRepository, Repository } from "typeorm";
import { Companiestocontacts } from "../entity/Companiestocontacts";

@EntityRepository(Companiestocontacts)
export class CompaniestocontactsRepository extends Repository<Companiestocontacts> {}
