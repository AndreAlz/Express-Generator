import { EntityRepository, Repository } from "typeorm";
import { Sections } from "../entity/Sections";

@EntityRepository(Sections)
export class SectionsRepository extends Repository<Sections> {}
