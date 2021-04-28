import { EntityRepository, Repository } from "typeorm";
import { Publicidadinicio } from "../entity/Publicidadinicio";

@EntityRepository(Publicidadinicio)
export class PublicidadinicioRepository extends Repository<Publicidadinicio> {}
