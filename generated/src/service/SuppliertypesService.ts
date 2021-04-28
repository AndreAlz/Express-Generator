import { getCustomRepository } from "typeorm";
import { SuppliertypesRepository } from "../repository/SuppliertypesRepository";
import { Suppliertypes } from "../entity/Suppliertypes";
import { v4 as uuidv4 } from "uuid";

export class SuppliertypesService {
  repository = getCustomRepository(SuppliertypesRepository);

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

  async create(bean: Suppliertypes) {
    try {
      //bean.suppliertypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Suppliertypes) {
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
