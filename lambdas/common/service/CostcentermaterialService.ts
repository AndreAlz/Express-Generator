import { getCustomRepository } from "typeorm";
import { CostcentermaterialRepository } from "../repository/CostcentermaterialRepository";
import { Costcentermaterial } from "../entity/Costcentermaterial";
import { v4 as uuidv4 } from "uuid";

export class CostcentermaterialService {
  repository = getCustomRepository(CostcentermaterialRepository);

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

  async create(bean: Costcentermaterial) {
    try {
      //bean.costcentermaterialid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Costcentermaterial) {
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
