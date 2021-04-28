import { EntityRepository, Repository } from "typeorm";
import { Contribuyentesunat } from "../entity/Contribuyentesunat";

@EntityRepository(Contribuyentesunat)
export class ContribuyentesunatRepository extends Repository<Contribuyentesunat> {}
