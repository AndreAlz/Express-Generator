import { getCustomRepository } from "typeorm";
import { SupplierstatusesRepository } from "../repository/SupplierstatusesRepository";
import { Supplierstatuses } from "../entity/Supplierstatuses";
import { v4 as uuidv4 } from "uuid";

export class SupplierstatusesService {
  repository = getCustomRepository(SupplierstatusesRepository);

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

  async create(bean: Supplierstatuses) {
    try {
      //bean.supplierstatusid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Supplierstatuses) {
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
