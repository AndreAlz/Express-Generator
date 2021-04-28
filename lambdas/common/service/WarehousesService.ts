import { getCustomRepository } from "typeorm";
import { WarehousesRepository } from "../repository/WarehousesRepository";
import { Warehouses } from "../entity/Warehouses";
import { v4 as uuidv4 } from "uuid";

export class WarehousesService {
  repository = getCustomRepository(WarehousesRepository);

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

  async create(bean: Warehouses) {
    try {
      //bean.warehouseid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Warehouses) {
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
