import { getCustomRepository } from "typeorm";
import { CountriesRepository } from "../repository/CountriesRepository";
import { Countries } from "../entity/Countries";
import { v4 as uuidv4 } from "uuid";

export class CountriesService {
  repository = getCustomRepository(CountriesRepository);

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

  async create(bean: Countries) {
    try {
      //bean.countryid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Countries) {
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
