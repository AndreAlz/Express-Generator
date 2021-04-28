import { EntityRepository, Repository } from "typeorm";
import { Biddingstosuppliers } from "../entity/Biddingstosuppliers";

@EntityRepository(Biddingstosuppliers)
export class BiddingstosuppliersRepository extends Repository<Biddingstosuppliers> {}
