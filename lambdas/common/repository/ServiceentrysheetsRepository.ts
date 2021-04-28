import { EntityRepository, Repository } from "typeorm";
import { Serviceentrysheets } from "../entity/Serviceentrysheets";

@EntityRepository(Serviceentrysheets)
export class ServiceentrysheetsRepository extends Repository<Serviceentrysheets> {}
