import { getCustomRepository } from "typeorm";
import { DeductiontypesRepository } from "../repository/DeductiontypesRepository";
import { Deductiontypes } from "../entity/Deductiontypes";
import { v4 as uuidv4 } from "uuid";

export class DeductiontypesService {
  repository = getCustomRepository(DeductiontypesRepository);

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

  async create(bean: Deductiontypes) {
    try {
      //bean.deductiontypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Deductiontypes) {
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
