import { getCustomRepository } from "typeorm";
import { EmailqueueRepository } from "../repository/EmailqueueRepository";
import { Emailqueue } from "../entity/Emailqueue";
import { v4 as uuidv4 } from "uuid";

export class EmailqueueService {
  repository = getCustomRepository(EmailqueueRepository);

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

  async create(bean: Emailqueue) {
    try {
      //bean.emailqueueid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Emailqueue) {
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
