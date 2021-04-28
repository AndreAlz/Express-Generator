import { EntityRepository, Repository } from "typeorm";
import { Specialrolestoappviews } from "../entity/Specialrolestoappviews";

@EntityRepository(Specialrolestoappviews)
export class SpecialrolestoappviewsRepository extends Repository<Specialrolestoappviews> {}
