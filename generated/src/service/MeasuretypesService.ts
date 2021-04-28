import { getCustomRepository } from "typeorm";
import { MeasuretypesRepository } from "../repository/MeasuretypesRepository";
import { Measuretypes } from "../entity/Measuretypes";
import { v4 as uuidv4 } from "uuid";

export class MeasuretypesService {
  repository = getCustomRepository(MeasuretypesRepository);

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

  async create(bean: Measuretypes) {
    try {
      //bean.measuretypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Measuretypes) {
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
