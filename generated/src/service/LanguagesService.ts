import { getCustomRepository } from "typeorm";
import { LanguagesRepository } from "../repository/LanguagesRepository";
import { Languages } from "../entity/Languages";
import { v4 as uuidv4 } from "uuid";

export class LanguagesService {
  repository = getCustomRepository(LanguagesRepository);

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

  async create(bean: Languages) {
    try {
      //bean.languageid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Languages) {
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
