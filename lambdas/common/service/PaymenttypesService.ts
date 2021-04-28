import { getCustomRepository } from "typeorm";
import { PaymenttypesRepository } from "../repository/PaymenttypesRepository";
import { Paymenttypes } from "../entity/Paymenttypes";
import { v4 as uuidv4 } from "uuid";

export class PaymenttypesService {
  repository = getCustomRepository(PaymenttypesRepository);

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

  async create(bean: Paymenttypes) {
    try {
      //bean.paymenttypeid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Paymenttypes) {
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
