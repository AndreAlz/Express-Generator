import { getCustomRepository } from "typeorm";
import { QuestionmultiplechoicesRepository } from "../repository/QuestionmultiplechoicesRepository";
import { Questionmultiplechoices } from "../entity/Questionmultiplechoices";
import { v4 as uuidv4 } from "uuid";

export class QuestionmultiplechoicesService {
  repository = getCustomRepository(QuestionmultiplechoicesRepository);

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

  async create(bean: Questionmultiplechoices) {
    try {
      //bean.multiplechoiceid = uuidv4();
      return await this.repository.save(bean);
    } catch (e) {
      throw e;
    }
  }

  async save(bean: Questionmultiplechoices) {
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
