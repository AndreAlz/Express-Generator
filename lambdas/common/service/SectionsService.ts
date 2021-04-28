import { getCustomRepository } from "typeorm";
import { SectionsRepository } from "../repository/SectionsRepository";
import { Sections } from "../entity/Sections";
import { v4 as uuidv4 } from "uuid";

export class SectionsService {
  repository = getCustomRepository(SectionsRepository);

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

  async create(bean: Sections) {
    try {
      //bean.idsection = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Sections) {
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
