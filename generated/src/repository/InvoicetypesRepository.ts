import { EntityRepository, Repository } from "typeorm";
import { Invoicetypes } from "../entity/Invoicetypes";

@EntityRepository(Invoicetypes)
export class InvoicetypesRepository extends Repository<Invoicetypes> {}
