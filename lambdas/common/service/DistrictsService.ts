import { getCustomRepository } from "typeorm";
import { DistrictsRepository } from "../repository/DistrictsRepository";
import { Districts } from "../entity/Districts";
import { v4 as uuidv4 } from "uuid";

export class DistrictsService {
  repository = getCustomRepository(DistrictsRepository);

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

  async create(bean: Districts) {
    try {
      //bean.districtid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Districts) {
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
