import { EntityRepository, Repository } from "typeorm";
import { Documents } from "../entity/Documents";

@EntityRepository(Documents)
export class DocumentsRepository extends Repository<Documents> {}
