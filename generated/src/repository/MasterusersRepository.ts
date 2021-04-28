import { EntityRepository, Repository } from "typeorm";
import { Masterusers } from "../entity/Masterusers";

@EntityRepository(Masterusers)
export class MasterusersRepository extends Repository<Masterusers> {}
