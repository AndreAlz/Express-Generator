import { getCustomRepository } from "typeorm";
import { ContactrolesRepository } from "../repository/ContactrolesRepository";
import { Contactroles } from "../entity/Contactroles";
import { v4 as uuidv4 } from "uuid";

export class ContactrolesService {
  repository = getCustomRepository(ContactrolesRepository);

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

  async create(bean: Contactroles) {
    try {
      //bean.contactroleid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Contactroles) {
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
