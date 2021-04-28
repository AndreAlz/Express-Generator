import { getCustomRepository } from "typeorm";
import { IncotermsRepository } from "../repository/IncotermsRepository";
import { Incoterms } from "../entity/Incoterms";
import { v4 as uuidv4 } from "uuid";

export class IncotermsService {
  repository = getCustomRepository(IncotermsRepository);

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

  async create(bean: Incoterms) {
    try {
      //bean.incotermid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Incoterms) {
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
