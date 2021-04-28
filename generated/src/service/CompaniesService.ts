import { getCustomRepository } from "typeorm";
import { CompaniesRepository } from "../repository/CompaniesRepository";
import { Companies } from "../entity/Companies";
import { v4 as uuidv4 } from "uuid";

export class CompaniesService {
  repository = getCustomRepository(CompaniesRepository);

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

  async create(bean: Companies) {
    try {
      //bean.companyid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Companies) {
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
