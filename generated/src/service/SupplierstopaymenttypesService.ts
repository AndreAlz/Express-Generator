import { getCustomRepository } from "typeorm";
import { SupplierstopaymenttypesRepository } from "../repository/SupplierstopaymenttypesRepository";
import { Supplierstopaymenttypes } from "../entity/Supplierstopaymenttypes";
import { v4 as uuidv4 } from "uuid";

export class SupplierstopaymenttypesService {
  repository = getCustomRepository(SupplierstopaymenttypesRepository);

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

  async create(bean: Supplierstopaymenttypes) {
    try {
      //bean.supplierstopaymenttypesid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Supplierstopaymenttypes) {
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
