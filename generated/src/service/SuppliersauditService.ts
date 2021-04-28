import { getCustomRepository } from "typeorm";
import { SuppliersauditRepository } from "../repository/SuppliersauditRepository";
import { Suppliersaudit } from "../entity/Suppliersaudit";
import { v4 as uuidv4 } from "uuid";

export class SuppliersauditService {
  repository = getCustomRepository(SuppliersauditRepository);

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

  async create(bean: Suppliersaudit) {
    try {
      //bean.suppliersauditid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Suppliersaudit) {
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
