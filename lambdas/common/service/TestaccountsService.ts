import { getCustomRepository } from "typeorm";
import { TestaccountsRepository } from "../repository/TestaccountsRepository";
import { Testaccounts } from "../entity/Testaccounts";
import { v4 as uuidv4 } from "uuid";

export class TestaccountsService {
  repository = getCustomRepository(TestaccountsRepository);

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

  async create(bean: Testaccounts) {
    try {
      //bean.id = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Testaccounts) {
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
