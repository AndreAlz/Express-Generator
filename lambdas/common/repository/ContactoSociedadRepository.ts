import { EntityRepository, Repository } from "typeorm";
import { ContactoSociedad } from "../entity/ContactoSociedad";

@EntityRepository(ContactoSociedad)
export class ContactoSociedadRepository extends Repository<ContactoSociedad> {}
