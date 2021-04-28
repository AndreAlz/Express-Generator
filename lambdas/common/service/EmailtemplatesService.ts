import { getCustomRepository } from "typeorm";
import { EmailtemplatesRepository } from "../repository/EmailtemplatesRepository";
import { Emailtemplates } from "../entity/Emailtemplates";
import { v4 as uuidv4 } from "uuid";

export class EmailtemplatesService {
  repository = getCustomRepository(EmailtemplatesRepository);

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

  async create(bean: Emailtemplates) {
    try {
      //bean.emailtemplateid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Emailtemplates) {
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
