import { getCustomRepository } from "typeorm";
import { UnitsRepository } from "../repository/UnitsRepository";
import { Units } from "../entity/Units";
import { v4 as uuidv4 } from "uuid";

export class UnitsService {
  repository = getCustomRepository(UnitsRepository);

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

  async create(bean: Units) {
    try {
      //bean.unitid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Units) {
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
