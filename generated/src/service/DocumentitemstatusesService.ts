import { getCustomRepository } from "typeorm";
import { DocumentitemstatusesRepository } from "../repository/DocumentitemstatusesRepository";
import { Documentitemstatuses } from "../entity/Documentitemstatuses";
import { v4 as uuidv4 } from "uuid";

export class DocumentitemstatusesService {
  repository = getCustomRepository(DocumentitemstatusesRepository);

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

  async create(bean: Documentitemstatuses) {
    try {
      //bean.documentitemstatusid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Documentitemstatuses) {
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
