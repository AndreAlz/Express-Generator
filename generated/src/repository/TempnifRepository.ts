import { EntityRepository, Repository } from "typeorm";
import { Tempnif } from "../entity/Tempnif";

@EntityRepository(Tempnif)
export class TempnifRepository extends Repository<Tempnif> {}
