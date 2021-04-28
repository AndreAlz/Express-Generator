import { getCustomRepository } from "typeorm";
import { TaxtypesRepository } from "../repository/TaxtypesRepository";
import { Taxtypes } from "../entity/Taxtypes";
import { v4 as uuidv4 } from "uuid";

export class TaxtypesService {
  repository = getCustomRepository(TaxtypesRepository);

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

  async create(bean: Taxtypes) {
    try {
      //bean.taxtypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Taxtypes) {
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
