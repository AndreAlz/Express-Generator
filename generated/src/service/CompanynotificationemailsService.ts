import { getCustomRepository } from "typeorm";
import { CompanynotificationemailsRepository } from "../repository/CompanynotificationemailsRepository";
import { Companynotificationemails } from "../entity/Companynotificationemails";
import { v4 as uuidv4 } from "uuid";

export class CompanynotificationemailsService {
  repository = getCustomRepository(CompanynotificationemailsRepository);

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

  async create(bean: Companynotificationemails) {
    try {
      //bean.companynotificationemailsid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Companynotificationemails) {
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
