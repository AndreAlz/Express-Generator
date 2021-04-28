import { EntityRepository, Repository } from "typeorm";
import { Languages } from "../entity/Languages";

@EntityRepository(Languages)
export class LanguagesRepository extends Repository<Languages> {}
