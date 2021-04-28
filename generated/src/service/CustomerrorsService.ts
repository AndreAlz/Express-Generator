import { getCustomRepository } from "typeorm";
import { CustomerrorsRepository } from "../repository/CustomerrorsRepository";
import { Customerrors } from "../entity/Customerrors";
import { v4 as uuidv4 } from "uuid";

export class CustomerrorsService {
  repository = getCustomRepository(CustomerrorsRepository);

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

  async create(bean: Customerrors) {
    try {
      //bean.customerrorid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Customerrors) {
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
