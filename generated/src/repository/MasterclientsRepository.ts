import { EntityRepository, Repository } from "typeorm";
import { Masterclients } from "../entity/Masterclients";

@EntityRepository(Masterclients)
export class MasterclientsRepository extends Repository<Masterclients> {}
