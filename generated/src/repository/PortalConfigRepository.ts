import { EntityRepository, Repository } from "typeorm";
import { PortalConfig } from "../entity/PortalConfig";

@EntityRepository(PortalConfig)
export class PortalConfigRepository extends Repository<PortalConfig> {}
