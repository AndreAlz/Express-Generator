import { getCustomRepository } from "typeorm";
import { QuestionsRepository } from "../repository/QuestionsRepository";
import { Questions } from "../entity/Questions";
import { v4 as uuidv4 } from "uuid";

export class QuestionsService {
  repository = getCustomRepository(QuestionsRepository);

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

  async create(bean: Questions) {
    try {
      //bean.idquestion = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Questions) {
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
