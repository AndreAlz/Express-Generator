import { getCustomRepository } from "typeorm";
import { BiddingsRepository } from "../repository/BiddingsRepository";
import { Biddings } from "../entity/Biddings";
import { v4 as uuidv4 } from "uuid";

export class BiddingsService {
  repository = getCustomRepository(BiddingsRepository);

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

  async create(bean: Biddings) {
    try {
      //bean.biddingid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Biddings) {
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
