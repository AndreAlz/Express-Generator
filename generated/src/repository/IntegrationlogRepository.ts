import { EntityRepository, Repository } from "typeorm";
import { Integrationlog } from "../entity/Integrationlog";

@EntityRepository(Integrationlog)
export class IntegrationlogRepository extends Repository<Integrationlog> {}
