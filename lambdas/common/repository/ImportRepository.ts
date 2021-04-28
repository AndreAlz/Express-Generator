import { EntityRepository, Repository } from "typeorm";
import { Import } from "../entity/Import";

@EntityRepository(Import)
export class ImportRepository extends Repository<Import> {}
