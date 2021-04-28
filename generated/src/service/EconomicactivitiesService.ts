import { getCustomRepository } from "typeorm";
import { EconomicactivitiesRepository } from "../repository/EconomicactivitiesRepository";
import { Economicactivities } from "../entity/Economicactivities";
import { v4 as uuidv4 } from "uuid";

export class EconomicactivitiesService {
  repository = getCustomRepository(EconomicactivitiesRepository);

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

  async create(bean: Economicactivities) {
    try {
      //bean.economicactivityid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Economicactivities) {
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
