import { getCustomRepository } from "typeorm";
import { ServiceagenttypesRepository } from "../repository/ServiceagenttypesRepository";
import { Serviceagenttypes } from "../entity/Serviceagenttypes";
import { v4 as uuidv4 } from "uuid";

export class ServiceagenttypesService {
  repository = getCustomRepository(ServiceagenttypesRepository);

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

  async create(bean: Serviceagenttypes) {
    try {
      //bean.serviceagenttypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Serviceagenttypes) {
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
