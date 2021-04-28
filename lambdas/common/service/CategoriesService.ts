import { getCustomRepository } from "typeorm";
import { CategoriesRepository } from "../repository/CategoriesRepository";
import { Categories } from "../entity/Categories";
import { v4 as uuidv4 } from "uuid";

export class CategoriesService {
  repository = getCustomRepository(CategoriesRepository);

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

  async create(bean: Categories) {
    try {
      //bean.categoryid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Categories) {
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
