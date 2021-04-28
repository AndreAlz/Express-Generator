import { getCustomRepository } from "typeorm";
import { ChoicesRepository } from "../repository/ChoicesRepository";
import { Choices } from "../entity/Choices";
import { v4 as uuidv4 } from "uuid";

export class ChoicesService {
  repository = getCustomRepository(ChoicesRepository);

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

  async create(bean: Choices) {
    try {
      //bean.idchoice = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Choices) {
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
