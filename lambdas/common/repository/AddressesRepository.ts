import { EntityRepository, Repository } from "typeorm";
import { Addresses } from "../entity/Addresses";

@EntityRepository(Addresses)
export class AddressesRepository extends Repository<Addresses> {}
