import { EntityRepository, Repository } from "typeorm";
import { Documentitems } from "../entity/Documentitems";

@EntityRepository(Documentitems)
export class DocumentitemsRepository extends Repository<Documentitems> {}
