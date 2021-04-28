import { EntityRepository, Repository } from "typeorm";
import { Quotations } from "../entity/Quotations";

@EntityRepository(Quotations)
export class QuotationsRepository extends Repository<Quotations> {}
