import { EntityRepository, Repository } from "typeorm";
import { Documentitempartials } from "../entity/Documentitempartials";

@EntityRepository(Documentitempartials)
export class DocumentitempartialsRepository extends Repository<Documentitempartials> {}
