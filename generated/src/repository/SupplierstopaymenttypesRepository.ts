import { EntityRepository, Repository } from "typeorm";
import { Supplierstopaymenttypes } from "../entity/Supplierstopaymenttypes";

@EntityRepository(Supplierstopaymenttypes)
export class SupplierstopaymenttypesRepository extends Repository<Supplierstopaymenttypes> {}
