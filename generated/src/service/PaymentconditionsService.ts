import { getCustomRepository } from "typeorm";
import { PaymentconditionsRepository } from "../repository/PaymentconditionsRepository";
import { Paymentconditions } from "../entity/Paymentconditions";
import { v4 as uuidv4 } from "uuid";

export class PaymentconditionsService {
  repository = getCustomRepository(PaymentconditionsRepository);

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

  async create(bean: Paymentconditions) {
    try {
      //bean.paymentconditionid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Paymentconditions) {
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
