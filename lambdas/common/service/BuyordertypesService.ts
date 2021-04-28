import { getCustomRepository } from "typeorm";
import { BuyordertypesRepository } from "../repository/BuyordertypesRepository";
import { Buyordertypes } from "../entity/Buyordertypes";
import { v4 as uuidv4 } from "uuid";

export class BuyordertypesService {
  repository = getCustomRepository(BuyordertypesRepository);

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

  async create(bean: Buyordertypes) {
    try {
      //bean.buyordertypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Buyordertypes) {
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
