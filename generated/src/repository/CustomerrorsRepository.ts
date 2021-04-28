import { EntityRepository, Repository } from "typeorm";
import { Customerrors } from "../entity/Customerrors";

@EntityRepository(Customerrors)
export class CustomerrorsRepository extends Repository<Customerrors> {}
