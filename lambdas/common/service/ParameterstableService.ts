import { getCustomRepository } from "typeorm";
import { ParameterstableRepository } from "../repository/ParameterstableRepository";
import { Parameterstable } from "../entity/Parameterstable";
import { v4 as uuidv4 } from "uuid";

export class ParameterstableService {
  repository = getCustomRepository(ParameterstableRepository);

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

  async create(bean: Parameterstable) {
    try {
      //bean.idparameter = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Parameterstable) {
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
