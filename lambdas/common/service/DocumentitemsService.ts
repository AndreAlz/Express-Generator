import { getCustomRepository } from "typeorm";
import { DocumentitemsRepository } from "../repository/DocumentitemsRepository";
import { Documentitems } from "../entity/Documentitems";
import { v4 as uuidv4 } from "uuid";

export class DocumentitemsService {
  repository = getCustomRepository(DocumentitemsRepository);

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

  async create(bean: Documentitems) {
    try {
      //bean.documentitemid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Documentitems) {
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
