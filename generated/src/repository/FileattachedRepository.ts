import { EntityRepository, Repository } from "typeorm";
import { Fileattached } from "../entity/Fileattached";

@EntityRepository(Fileattached)
export class FileattachedRepository extends Repository<Fileattached> {}
