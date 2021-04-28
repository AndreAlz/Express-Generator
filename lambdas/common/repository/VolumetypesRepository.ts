import { EntityRepository, Repository } from "typeorm";
import { Volumetypes } from "../entity/Volumetypes";

@EntityRepository(Volumetypes)
export class VolumetypesRepository extends Repository<Volumetypes> {}
