import { EntityRepository, Repository } from "typeorm";
import { Measuretypes } from "../entity/Measuretypes";

@EntityRepository(Measuretypes)
export class MeasuretypesRepository extends Repository<Measuretypes> {}
