import { getCustomRepository } from "typeorm";
import { LicitacionmasterRepository } from "../repository/LicitacionmasterRepository";
import { Licitacionmaster } from "../entity/Licitacionmaster";
import { v4 as uuidv4 } from "uuid";

export class LicitacionmasterService {
  repository = getCustomRepository(LicitacionmasterRepository);

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

  async create(bean: Licitacionmaster) {
    try {
      //bean.licitacionid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Licitacionmaster) {
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
