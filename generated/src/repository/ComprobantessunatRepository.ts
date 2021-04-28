import { EntityRepository, Repository } from "typeorm";
import { Comprobantessunat } from "../entity/Comprobantessunat";

@EntityRepository(Comprobantessunat)
export class ComprobantessunatRepository extends Repository<Comprobantessunat> {}
