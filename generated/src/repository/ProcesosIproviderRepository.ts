import { EntityRepository, Repository } from "typeorm";
import { ProcesosIprovider } from "../entity/ProcesosIprovider";

@EntityRepository(ProcesosIprovider)
export class ProcesosIproviderRepository extends Repository<ProcesosIprovider> {}
