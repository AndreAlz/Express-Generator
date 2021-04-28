import { getCustomRepository } from "typeorm";
import { ErrorlogtempRepository } from "../repository/ErrorlogtempRepository";
import { Errorlogtemp } from "../entity/Errorlogtemp";
import { v4 as uuidv4 } from "uuid";

export class ErrorlogtempService {
  repository = getCustomRepository(ErrorlogtempRepository);

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

  async create(bean: Errorlogtemp) {
    try {
      //bean.errorlogtempid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Errorlogtemp) {
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
