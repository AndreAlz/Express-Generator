import { getCustomRepository } from "typeorm";
import { SupplierssocietyRepository } from "../repository/SupplierssocietyRepository";
import { Supplierssociety } from "../entity/Supplierssociety";
import { v4 as uuidv4 } from "uuid";

export class SupplierssocietyService {
  repository = getCustomRepository(SupplierssocietyRepository);

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

  async create(bean: Supplierssociety) {
    try {
      //bean.supplierssocietyid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Supplierssociety) {
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
