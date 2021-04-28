import { getCustomRepository } from "typeorm";
import { BanksRepository } from "../repository/BanksRepository";
import { Banks } from "../entity/Banks";
import { v4 as uuidv4 } from "uuid";

export class BanksService {
  repository = getCustomRepository(BanksRepository);

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

  async create(bean: Banks) {
    try {
      //bean.bankid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Banks) {
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
