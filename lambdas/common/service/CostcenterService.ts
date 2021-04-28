import { getCustomRepository } from "typeorm";
import { CostcenterRepository } from "../repository/CostcenterRepository";
import { Costcenter } from "../entity/Costcenter";
import { v4 as uuidv4 } from "uuid";

export class CostcenterService {
  repository = getCustomRepository(CostcenterRepository);

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

  async create(bean: Costcenter) {
    try {
      //bean.idcostcenter = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Costcenter) {
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
