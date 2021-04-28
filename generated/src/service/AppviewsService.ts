import { getCustomRepository } from "typeorm";
import { AppviewsRepository } from "../repository/AppviewsRepository";
import { Appviews } from "../entity/Appviews";
import { v4 as uuidv4 } from "uuid";

export class AppviewsService {
  repository = getCustomRepository(AppviewsRepository);

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

  async create(bean: Appviews) {
    try {
      //bean.viewid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Appviews) {
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
