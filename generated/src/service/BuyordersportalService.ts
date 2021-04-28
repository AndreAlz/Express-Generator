import { getCustomRepository } from "typeorm";
import { BuyordersportalRepository } from "../repository/BuyordersportalRepository";
import { Buyordersportal } from "../entity/Buyordersportal";
import { v4 as uuidv4 } from "uuid";

export class BuyordersportalService {
  repository = getCustomRepository(BuyordersportalRepository);

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

  async create(bean: Buyordersportal) {
    try {
      //bean.buyorderportalid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Buyordersportal) {
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
