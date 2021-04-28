import { getCustomRepository } from "typeorm";
import { ContactoSociedadRepository } from "../repository/ContactoSociedadRepository";
import { ContactoSociedad } from "../entity/ContactoSociedad";
import { v4 as uuidv4 } from "uuid";

export class ContactoSociedadService {
  repository = getCustomRepository(ContactoSociedadRepository);

  async findall() {
    try {
      return await this.repository.find();
    } catch (e) {
      throw e;
    }
  }

  async find(filter: any) {
    try {
      return await this.repository.find(filter);
    } catch (e) {
      throw e;
    }
  }

  async create(bean: ContactoSociedad) {
    try {
      //bean.idContactoSociedad = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: ContactoSociedad) {
    try {
      bean.fechaModificacion = new Date();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async delete(id: string) {
    try {
      return await this.repository.delete(id);
    } catch (e) {
      throw e;
    }
  }
}
