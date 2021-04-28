import { getCustomRepository } from "typeorm";
import { NumbersRepository } from "../repository/NumbersRepository";
import { Numbers } from "../entity/Numbers";
import { v4 as uuidv4 } from "uuid";

export class NumbersService {
  repository = getCustomRepository(NumbersRepository);

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

  async create(bean: Numbers) {
    try {
      //bean.numberid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Numbers) {
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
