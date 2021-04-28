import { getCustomRepository } from "typeorm";
import { LicitacionmasterhistoryRepository } from "../repository/LicitacionmasterhistoryRepository";
import { Licitacionmasterhistory } from "../entity/Licitacionmasterhistory";
import { v4 as uuidv4 } from "uuid";

export class LicitacionmasterhistoryService {
  repository = getCustomRepository(LicitacionmasterhistoryRepository);

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

  async create(bean: Licitacionmasterhistory) {
    try {
      //bean.historyid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Licitacionmasterhistory) {
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
