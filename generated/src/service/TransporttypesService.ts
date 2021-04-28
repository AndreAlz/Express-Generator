import { getCustomRepository } from "typeorm";
import { TransporttypesRepository } from "../repository/TransporttypesRepository";
import { Transporttypes } from "../entity/Transporttypes";
import { v4 as uuidv4 } from "uuid";

export class TransporttypesService {
  repository = getCustomRepository(TransporttypesRepository);

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

  async create(bean: Transporttypes) {
    try {
      //bean.transporttypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Transporttypes) {
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
