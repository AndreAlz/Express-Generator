import { getCustomRepository } from "typeorm";
import { DocumentsRepository } from "../repository/DocumentsRepository";
import { Documents } from "../entity/Documents";
import { v4 as uuidv4 } from "uuid";

export class DocumentsService {
  repository = getCustomRepository(DocumentsRepository);

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

  async create(bean: Documents) {
    try {
      //bean.documentid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Documents) {
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
