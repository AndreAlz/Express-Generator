import { EntityRepository, Repository } from "typeorm";
import { Paymentconditions } from "../entity/Paymentconditions";

@EntityRepository(Paymentconditions)
export class PaymentconditionsRepository extends Repository<Paymentconditions> {}
