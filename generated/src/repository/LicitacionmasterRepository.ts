import { EntityRepository, Repository } from "typeorm";
import { Licitacionmaster } from "../entity/Licitacionmaster";

@EntityRepository(Licitacionmaster)
export class LicitacionmasterRepository extends Repository<Licitacionmaster> {}
