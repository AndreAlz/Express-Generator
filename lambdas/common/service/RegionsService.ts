import { getCustomRepository } from "typeorm";
import { RegionsRepository } from "../repository/RegionsRepository";
import { Regions } from "../entity/Regions";
import { v4 as uuidv4 } from "uuid";

export class RegionsService {
  repository = getCustomRepository(RegionsRepository);

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

  async create(bean: Regions) {
    try {
      //bean.regionid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Regions) {
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
