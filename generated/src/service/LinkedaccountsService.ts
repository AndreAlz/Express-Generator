import { getCustomRepository } from "typeorm";
import { LinkedaccountsRepository } from "../repository/LinkedaccountsRepository";
import { Linkedaccounts } from "../entity/Linkedaccounts";
import { v4 as uuidv4 } from "uuid";

export class LinkedaccountsService {
  repository = getCustomRepository(LinkedaccountsRepository);

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

  async create(bean: Linkedaccounts) {
    try {
      //bean.linkedaccountid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Linkedaccounts) {
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
