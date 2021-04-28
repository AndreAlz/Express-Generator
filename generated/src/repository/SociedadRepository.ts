import { EntityRepository, Repository } from "typeorm";
import { Sociedad } from "../entity/Sociedad";

@EntityRepository(Sociedad)
export class SociedadRepository extends Repository<Sociedad> {}
