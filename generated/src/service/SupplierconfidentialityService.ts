import { getCustomRepository } from "typeorm";
import { SupplierconfidentialityRepository } from "../repository/SupplierconfidentialityRepository";
import { Supplierconfidentiality } from "../entity/Supplierconfidentiality";
import { v4 as uuidv4 } from "uuid";

export class SupplierconfidentialityService {
  repository = getCustomRepository(SupplierconfidentialityRepository);

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

  async create(bean: Supplierconfidentiality) {
    try {
      //bean.supplierconfidentialityid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Supplierconfidentiality) {
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
