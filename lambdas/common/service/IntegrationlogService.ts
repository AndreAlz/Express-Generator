import { getCustomRepository } from "typeorm";
import { IntegrationlogRepository } from "../repository/IntegrationlogRepository";
import { Integrationlog } from "../entity/Integrationlog";
import { v4 as uuidv4 } from "uuid";

export class IntegrationlogService {
  repository = getCustomRepository(IntegrationlogRepository);

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

  async create(bean: Integrationlog) {
    try {
      //bean.idregistro = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Integrationlog) {
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
