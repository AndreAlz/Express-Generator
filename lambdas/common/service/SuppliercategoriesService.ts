import { getCustomRepository } from "typeorm";
import { SuppliercategoriesRepository } from "../repository/SuppliercategoriesRepository";
import { Suppliercategories } from "../entity/Suppliercategories";
import { v4 as uuidv4 } from "uuid";

export class SuppliercategoriesService {
  repository = getCustomRepository(SuppliercategoriesRepository);

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

  async create(bean: Suppliercategories) {
    try {
      //bean.suppliercategoriesid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Suppliercategories) {
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
