import { getCustomRepository } from "typeorm";
import { PersonsRepository } from "../repository/PersonsRepository";
import { Persons } from "../entity/Persons";
import { v4 as uuidv4 } from "uuid";

export class PersonsService {
  repository = getCustomRepository(PersonsRepository);

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

  async create(bean: Persons) {
    try {
      //bean.personid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Persons) {
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
