import { getCustomRepository } from "typeorm";
import { WaybillsRepository } from "../repository/WaybillsRepository";
import { Waybills } from "../entity/Waybills";
import { v4 as uuidv4 } from "uuid";

export class WaybillsService {
  repository = getCustomRepository(WaybillsRepository);

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

  async create(bean: Waybills) {
    try {
      //bean.waybillid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Waybills) {
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
