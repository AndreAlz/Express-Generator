import { EntityRepository, Repository } from "typeorm";
import { Logprocesos } from "../entity/Logprocesos";

@EntityRepository(Logprocesos)
export class LogprocesosRepository extends Repository<Logprocesos> {}
