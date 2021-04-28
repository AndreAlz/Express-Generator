import { getCustomRepository } from "typeorm";
import { BankaccountsRepository } from "../repository/BankaccountsRepository";
import { Bankaccounts } from "../entity/Bankaccounts";
import { v4 as uuidv4 } from "uuid";

export class BankaccountsService {
  repository = getCustomRepository(BankaccountsRepository);

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

  async create(bean: Bankaccounts) {
    try {
      //bean.bankaccountid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Bankaccounts) {
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
