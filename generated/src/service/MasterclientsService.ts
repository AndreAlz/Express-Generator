import { getCustomRepository } from "typeorm";
import { MasterclientsRepository } from "../repository/MasterclientsRepository";
import { Masterclients } from "../entity/Masterclients";
import { v4 as uuidv4 } from "uuid";

export class MasterclientsService {
  repository = getCustomRepository(MasterclientsRepository);

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

  async create(bean: Masterclients) {
    try {
      //bean.clientid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Masterclients) {
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
