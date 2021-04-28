import { EntityRepository, Repository } from "typeorm";
import { Errorlogtemp } from "../entity/Errorlogtemp";

@EntityRepository(Errorlogtemp)
export class ErrorlogtempRepository extends Repository<Errorlogtemp> {}
