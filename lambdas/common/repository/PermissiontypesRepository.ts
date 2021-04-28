import { EntityRepository, Repository } from "typeorm";
import { Permissiontypes } from "../entity/Permissiontypes";

@EntityRepository(Permissiontypes)
export class PermissiontypesRepository extends Repository<Permissiontypes> {}
