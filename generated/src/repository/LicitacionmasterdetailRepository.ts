import { EntityRepository, Repository } from "typeorm";
import { Licitacionmasterdetail } from "../entity/Licitacionmasterdetail";

@EntityRepository(Licitacionmasterdetail)
export class LicitacionmasterdetailRepository extends Repository<Licitacionmasterdetail> {}
