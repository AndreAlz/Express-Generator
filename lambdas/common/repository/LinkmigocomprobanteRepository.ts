import { EntityRepository, Repository } from "typeorm";
import { Linkmigocomprobante } from "../entity/Linkmigocomprobante";

@EntityRepository(Linkmigocomprobante)
export class LinkmigocomprobanteRepository extends Repository<Linkmigocomprobante> {}
