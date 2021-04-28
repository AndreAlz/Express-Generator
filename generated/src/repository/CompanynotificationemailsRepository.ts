import { EntityRepository, Repository } from "typeorm";
import { Companynotificationemails } from "../entity/Companynotificationemails";

@EntityRepository(Companynotificationemails)
export class CompanynotificationemailsRepository extends Repository<Companynotificationemails> {}
