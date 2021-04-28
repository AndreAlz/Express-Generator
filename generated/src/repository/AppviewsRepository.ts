import { EntityRepository, Repository } from "typeorm";
import { Appviews } from "../entity/Appviews";

@EntityRepository(Appviews)
export class AppviewsRepository extends Repository<Appviews> {}
