import { EntityRepository, Repository } from "typeorm";
import { Paymenttypes } from "../entity/Paymenttypes";

@EntityRepository(Paymenttypes)
export class PaymenttypesRepository extends Repository<Paymenttypes> {}
