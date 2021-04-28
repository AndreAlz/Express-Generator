import { getCustomRepository } from "typeorm";
import { LogwebservicesRepository } from "../repository/LogwebservicesRepository";
import { Logwebservices } from "../entity/Logwebservices";
import { v4 as uuidv4 } from "uuid";

export class LogwebservicesService {
  repository = getCustomRepository(LogwebservicesRepository);

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

  async create(bean: Logwebservices) {
    try {
      //bean.logwebserviceid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Logwebservices) {
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
