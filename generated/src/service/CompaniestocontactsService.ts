import { getCustomRepository } from "typeorm";
import { CompaniestocontactsRepository } from "../repository/CompaniestocontactsRepository";
import { Companiestocontacts } from "../entity/Companiestocontacts";
import { v4 as uuidv4 } from "uuid";

export class CompaniestocontactsService {
  repository = getCustomRepository(CompaniestocontactsRepository);

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

  async create(bean: Companiestocontacts) {
    try {
      //bean.companiestocontactsid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Companiestocontacts) {
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
