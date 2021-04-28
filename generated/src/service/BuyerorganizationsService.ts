import { getCustomRepository } from "typeorm";
import { BuyerorganizationsRepository } from "../repository/BuyerorganizationsRepository";
import { Buyerorganizations } from "../entity/Buyerorganizations";
import { v4 as uuidv4 } from "uuid";

export class BuyerorganizationsService {
  repository = getCustomRepository(BuyerorganizationsRepository);

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

  async create(bean: Buyerorganizations) {
    try {
      //bean.buyerorganizationid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Buyerorganizations) {
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
