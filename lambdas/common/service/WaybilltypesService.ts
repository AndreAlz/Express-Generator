import { getCustomRepository } from "typeorm";
import { WaybilltypesRepository } from "../repository/WaybilltypesRepository";
import { Waybilltypes } from "../entity/Waybilltypes";
import { v4 as uuidv4 } from "uuid";

export class WaybilltypesService {
  repository = getCustomRepository(WaybilltypesRepository);

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

  async create(bean: Waybilltypes) {
    try {
      //bean.waybilltypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Waybilltypes) {
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
