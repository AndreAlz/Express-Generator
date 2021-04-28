import { getCustomRepository } from "typeorm";
import { CurrenciesRepository } from "../repository/CurrenciesRepository";
import { Currencies } from "../entity/Currencies";
import { v4 as uuidv4 } from "uuid";

export class CurrenciesService {
  repository = getCustomRepository(CurrenciesRepository);

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

  async create(bean: Currencies) {
    try {
      //bean.currencyid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Currencies) {
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
