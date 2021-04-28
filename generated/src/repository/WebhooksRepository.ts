import { EntityRepository, Repository } from "typeorm";
import { Webhooks } from "../entity/Webhooks";

@EntityRepository(Webhooks)
export class WebhooksRepository extends Repository<Webhooks> {}
