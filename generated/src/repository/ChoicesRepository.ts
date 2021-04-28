import { EntityRepository, Repository } from "typeorm";
import { Choices } from "../entity/Choices";

@EntityRepository(Choices)
export class ChoicesRepository extends Repository<Choices> {}
