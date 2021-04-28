import { getCustomRepository } from "typeorm";
import { DocumentstatusesRepository } from "../repository/DocumentstatusesRepository";
import { Documentstatuses } from "../entity/Documentstatuses";
import { v4 as uuidv4 } from "uuid";

export class DocumentstatusesService {
  repository = getCustomRepository(DocumentstatusesRepository);

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

  async create(bean: Documentstatuses) {
    try {
      //bean.id = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Documentstatuses) {
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
