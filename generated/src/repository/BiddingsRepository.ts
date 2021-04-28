import { EntityRepository, Repository } from "typeorm";
import { Biddings } from "../entity/Biddings";

@EntityRepository(Biddings)
export class BiddingsRepository extends Repository<Biddings> {}
