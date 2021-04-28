import { getCustomRepository } from "typeorm";
import { LicitacioneventsRepository } from "../repository/LicitacioneventsRepository";
import { Licitacionevents } from "../entity/Licitacionevents";
import { v4 as uuidv4 } from "uuid";

export class LicitacioneventsService {
  repository = getCustomRepository(LicitacioneventsRepository);

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

  async create(bean: Licitacionevents) {
    try {
      //bean.eventid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Licitacionevents) {
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
