import { getCustomRepository } from "typeorm";
import { ServiceentrysheetsRepository } from "../repository/ServiceentrysheetsRepository";
import { Serviceentrysheets } from "../entity/Serviceentrysheets";
import { v4 as uuidv4 } from "uuid";

export class ServiceentrysheetsService {
  repository = getCustomRepository(ServiceentrysheetsRepository);

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

  async create(bean: Serviceentrysheets) {
    try {
      //bean.serviceentrysheetid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Serviceentrysheets) {
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
