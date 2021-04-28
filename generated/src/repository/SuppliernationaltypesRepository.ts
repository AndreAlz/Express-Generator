import { EntityRepository, Repository } from "typeorm";
import { Suppliernationaltypes } from "../entity/Suppliernationaltypes";

@EntityRepository(Suppliernationaltypes)
export class SuppliernationaltypesRepository extends Repository<Suppliernationaltypes> {}
