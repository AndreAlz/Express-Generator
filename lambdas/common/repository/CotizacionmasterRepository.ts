import { EntityRepository, Repository } from "typeorm";
import { Cotizacionmaster } from "../entity/Cotizacionmaster";

@EntityRepository(Cotizacionmaster)
export class CotizacionmasterRepository extends Repository<Cotizacionmaster> {}
