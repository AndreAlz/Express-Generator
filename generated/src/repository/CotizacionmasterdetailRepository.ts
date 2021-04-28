import { EntityRepository, Repository } from "typeorm";
import { Cotizacionmasterdetail } from "../entity/Cotizacionmasterdetail";

@EntityRepository(Cotizacionmasterdetail)
export class CotizacionmasterdetailRepository extends Repository<Cotizacionmasterdetail> {}
